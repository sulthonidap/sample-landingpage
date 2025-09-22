'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import type { News } from '@/lib/types';

export function NewsManager() {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    date: '',
  });

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/admin/news');
      if (response.ok) {
        const data = await response.json();
        setNews(data);
      }
    } catch (error) {
      toast.error('Failed to fetch news');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const url = editingNews ? `/api/admin/news/${editingNews.id}` : '/api/admin/news';
      const method = editingNews ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(editingNews ? 'News updated successfully!' : 'News created successfully!');
        setIsDialogOpen(false);
        resetForm();
        fetchNews();
      } else {
        const error = await response.json();
        toast.error(error.message || 'Operation failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (newsItem: News) => {
    setEditingNews(newsItem);
    setFormData({
      title: newsItem.title,
      content: newsItem.content,
      image: newsItem.image || '',
      date: newsItem.date,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this news article?')) return;

    try {
      const response = await fetch(`/api/admin/news/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast.success('News deleted successfully!');
        fetchNews();
      } else {
        toast.error('Failed to delete news');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      image: '',
      date: '',
    });
    setEditingNews(null);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Manajemen Portfolio</CardTitle>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#F37526] hover:bg-[#e56620]">
                <Plus className="mr-2 h-4 w-4" />
                Tambah Portfolio
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {editingNews ? 'Edit Portfolio' : 'Tambah Portfolio Baru'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="title">Judul Proyek</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="content">Deskripsi Proyek</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={6}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="image">URL Gambar</Label>
                  <Input
                    id="image"
                    type="url"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Tanggal Selesai</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={handleDialogClose}>
                    Batal
                  </Button>
                  <Button type="submit" disabled={isLoading} className="bg-[#F37526] hover:bg-[#e56620]">
                    {isLoading ? 'Menyimpan...' : editingNews ? 'Update' : 'Buat'}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Judul Proyek</TableHead>
              <TableHead>Tanggal Selesai</TableHead>
              <TableHead>Deskripsi Preview</TableHead>
              <TableHead>Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {news.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.title}</TableCell>
                <TableCell>{new Date(item.date).toLocaleDateString('id-ID')}</TableCell>
                <TableCell className="max-w-xs truncate">{item.content}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}