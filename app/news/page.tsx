import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { staticNews } from '@/lib/data';

export const metadata = {
  title: 'Portfolio - PT Aghna Partnership',
  description: 'Portfolio dan karya terbaik PT Aghna Partnership dalam perencanaan konstruksi',
};

export default function NewsPage() {
  const news = staticNews;

  return (
    <div className="min-h-screen bg-[#DDE4EB]">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-[#00028C] mb-4">Latest News</h1>
          <p className="text-gray-600">Stay updated with our latest developments and industry insights</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(article.date).toLocaleDateString()}
                </div>
                <h2 className="text-xl font-bold text-[#00028C] mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.content}</p>
                <Link href={`/news/${article.id}`}>
                  <Button className="bg-[#F37526] hover:bg-[#e56620]">Read More</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}