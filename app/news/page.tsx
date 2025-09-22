import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { db } from '@/lib/db';
import type { News } from '@/lib/types';

export const metadata = {
  title: 'News - TechVision Solutions',
  description: 'Latest news and updates from TechVision Solutions',
};

function getAllNews(): News[] {
  // Static data for now - we'll implement proper database queries later
  return [
    {
      id: 1,
      title: 'Company Expands Operations',
      content: 'We are excited to announce our expansion into new markets, bringing innovative solutions to more customers worldwide. This strategic move allows us to serve a broader customer base and deliver our cutting-edge technology solutions to emerging markets.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      date: '2024-01-15',
      created_at: '2024-01-15T00:00:00Z'
    },
    {
      id: 2,
      title: 'New Product Launch',
      content: 'Introducing our latest product line designed to meet the evolving needs of our customers with cutting-edge technology. This revolutionary platform combines artificial intelligence with user-friendly design to deliver unprecedented performance.',
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      date: '2024-01-10',
      created_at: '2024-01-10T00:00:00Z'
    },
    {
      id: 3,
      title: 'Industry Recognition',
      content: 'Our company has been recognized as a leader in innovation by industry experts and peer organizations. This prestigious award reflects our commitment to excellence and continuous improvement in technology solutions.',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
      date: '2024-01-05',
      created_at: '2024-01-05T00:00:00Z'
    },
    {
      id: 4,
      title: 'Partnership Announcement',
      content: 'We are thrilled to announce our strategic partnership with leading technology companies to enhance our service offerings and expand our global reach.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      date: '2023-12-28',
      created_at: '2023-12-28T00:00:00Z'
    },
    {
      id: 5,
      title: 'Technology Innovation',
      content: 'Our research and development team has achieved a breakthrough in quantum computing applications, opening new possibilities for our enterprise clients.',
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      date: '2023-12-20',
      created_at: '2023-12-20T00:00:00Z'
    },
    {
      id: 6,
      title: 'Customer Success Story',
      content: 'Learn how our solutions helped a Fortune 500 company increase their operational efficiency by 40% while reducing costs by 25%.',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
      date: '2023-12-15',
      created_at: '2023-12-15T00:00:00Z'
    }
  ];
}

export default function NewsPage() {
  const news = getAllNews();

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