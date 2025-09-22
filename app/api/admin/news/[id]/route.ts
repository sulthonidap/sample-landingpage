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
    const { title, content, image, date } = await request.json();
    const id = params.id;

    if (!title || !content || !date) {
      return NextResponse.json(
        { message: 'Title, content, and date are required' },
        { status: 400 }
      );
    }

    const result = db.prepare(
      'UPDATE news SET title = ?, content = ?, image = ?, date = ? WHERE id = ?'
    ).run(title, content, image || null, date, id);

    if (result.changes === 0) {
      return NextResponse.json({ message: 'News not found' }, { status: 404 });
    }

    const updatedNews = db.prepare('SELECT * FROM news WHERE id = ?').get(id);

    return NextResponse.json(updatedNews);
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

    const result = db.prepare('DELETE FROM news WHERE id = ?').run(id);

    if (result.changes === 0) {
      return NextResponse.json({ message: 'News not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}