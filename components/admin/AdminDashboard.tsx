'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LogOut, Newspaper, Package, BarChart3 } from 'lucide-react';
import { NewsManager } from './NewsManager';
import { ProductsManager } from './ProductsManager';
import type { Admin } from '@/lib/types';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface AdminDashboardProps {
  admin: Admin;
}

export function AdminDashboard({ admin }: AdminDashboardProps) {
  const router = useRouter();
  
  const handleLogout = () => {
    document.cookie = 'admin-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    toast.success('Logged out successfully');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#DDE4EB]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#00028C]">Admin Dashboard - PT Aghna Partnership</h1>
            <p className="text-gray-600">Selamat datang kembali, {admin.username}!</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Portfolio</CardTitle>
              <Newspaper className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F37526]">12</div>
              <p className="text-xs text-muted-foreground">
                +2 dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Layanan</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F37526]">5</div>
              <p className="text-xs text-muted-foreground">
                Layanan utama
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Proyek Aktif</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#F37526]">8</div>
              <p className="text-xs text-muted-foreground">
                +2 dari minggu lalu
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="news" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="news">Manajemen Portfolio</TabsTrigger>
            <TabsTrigger value="products">Manajemen Layanan</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <NewsManager />
          </TabsContent>

          <TabsContent value="products">
            <ProductsManager />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}