import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { db } from '@/lib/db';

async function checkAuth(request: NextRequest) {
  const token = request.cookies.get('admin-token')?.value;
  
  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

export async function GET(request: NextRequest) {
  const admin = await checkAuth(request);
  
  if (!admin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const products = db.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const admin = await checkAuth(request);
  
  if (!admin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, description, price, image } = await request.json();

    if (!name || !description || !price) {
      return NextResponse.json(
        { message: 'Name, description, and price are required' },
        { status: 400 }
      );
    }

    const result = db.prepare(
      'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)'
    ).run(name, description, price, image || null);

    const newProduct = db.prepare('SELECT * FROM products WHERE id = ?').get(result.lastInsertRowid);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}