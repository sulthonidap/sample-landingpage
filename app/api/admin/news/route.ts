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
    const news = db.prepare('SELECT * FROM news ORDER BY date DESC').all();
    return NextResponse.json(news);
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
    const { title, content, image, date } = await request.json();

    if (!title || !content || !date) {
      return NextResponse.json(
        { message: 'Title, content, and date are required' },
        { status: 400 }
      );
    }

    const result = db.prepare(
      'INSERT INTO news (title, content, image, date) VALUES (?, ?, ?, ?)'
    ).run(title, content, image || null, date);

    const newNews = db.prepare('SELECT * FROM news WHERE id = ?').get(result.lastInsertRowid);

    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}