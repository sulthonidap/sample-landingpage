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

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const admin = await checkAuth(request);
  
  if (!admin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { name, description, price, image } = await request.json();
    const id = params.id;

    if (!name || !description || !price) {
      return NextResponse.json(
        { message: 'Name, description, and price are required' },
        { status: 400 }
      );
    }

    const result = db.prepare(
      'UPDATE products SET name = ?, description = ?, price = ?, image = ? WHERE id = ?'
    ).run(name, description, price, image || null, id);

    if (result.changes === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    const updatedProduct = db.prepare('SELECT * FROM products WHERE id = ?').get(id);

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const admin = await checkAuth(request);
  
  if (!admin) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = params.id;

    const result = db.prepare('DELETE FROM products WHERE id = ?').run(id);

    if (result.changes === 0) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}