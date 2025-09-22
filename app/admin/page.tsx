import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { AdminDashboard } from '@/components/admin/AdminDashboard';

export const metadata = {
  title: 'Admin Dashboard - TechVision Solutions',
  description: 'Admin panel for managing news and products',
};

async function checkAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get('admin-token')?.value;

  if (!token) {
    redirect('/admin/login');
  }

  const admin = await verifyToken(token);
  if (!admin) {
    redirect('/admin/login');
  }

  return admin;
}

export default async function AdminPage() {
  const admin = await checkAuth();

  return <AdminDashboard admin={admin} />;
}