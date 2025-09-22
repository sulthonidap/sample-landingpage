import { compare } from 'bcryptjs';
import { db } from './db';
import { SignJWT, jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode('your-secret-key-change-in-production');

export interface Admin {
  id: number;
  username: string;
}

export async function authenticateAdmin(username: string, password: string): Promise<Admin | null> {
  const admin = db.prepare('SELECT * FROM admins WHERE username = ?').get(username) as any;
  
  if (!admin) {
    return null;
  }

  const isValid = await compare(password, admin.password);
  if (!isValid) {
    return null;
  }

  return { id: admin.id, username: admin.username };
}

export async function createToken(admin: Admin): Promise<string> {
  return await new SignJWT({ id: admin.id, username: admin.username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('24h')
    .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<Admin | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as unknown as Admin;
  } catch {
    return null;
  }
}