import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { db } from '@/lib/db';
import type { News } from '@/lib/types';
import { notFound } from 'next/navigation';

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

function getNews(id: string): News | null {
  // Static data for now - we'll implement proper database queries later
  const newsList = [
    {
      id: 1,
      title: 'Company Expands Operations',
      content: 'We are excited to announce our expansion into new markets, bringing innovative solutions to more customers worldwide. This strategic move allows us to serve a broader customer base and deliver our cutting-edge technology solutions to emerging markets.\n\nOur expansion includes:\n\n• New offices in three major cities\n• Localized support teams\n• Enhanced product offerings\n• 24/7 customer service\n\nThis expansion represents our commitment to global growth and our dedication to providing world-class technology solutions to businesses of all sizes.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      date: '2024-01-15',
      created_at: '2024-01-15T00:00:00Z'
    },
    {
      id: 2,
      title: 'New Product Launch',
      content: 'Introducing our latest product line designed to meet the evolving needs of our customers with cutting-edge technology. This revolutionary platform combines artificial intelligence with user-friendly design to deliver unprecedented performance.\n\nKey features include:\n\n• Advanced AI integration\n• Real-time analytics\n• Scalable architecture\n• Enterprise security\n\nWe believe this product will revolutionize how businesses approach technology solutions and drive innovation across industries.',
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      date: '2024-01-10',
      created_at: '2024-01-10T00:00:00Z'
    },
    {
      id: 3,
      title: 'Industry Recognition',
      content: 'Our company has been recognized as a leader in innovation by industry experts and peer organizations. This prestigious award reflects our commitment to excellence and continuous improvement in technology solutions.\n\nThis recognition validates our efforts in:\n\n• Research and development\n• Customer satisfaction\n• Innovation leadership\n• Industry best practices\n\nWe are honored to receive this recognition and will continue to push the boundaries of what\'s possible in technology.',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
      date: '2024-01-05',
      created_at: '2024-01-05T00:00:00Z'
    },
    {
      id: 4,
      title: 'Partnership Announcement',
      content: 'We are thrilled to announce our strategic partnership with leading technology companies to enhance our service offerings and expand our global reach.\n\nThis partnership will bring:\n\n• Enhanced capabilities\n• Broader market access\n• Improved customer support\n• Innovative solutions\n\nWe look forward to the opportunities this partnership will create for our customers and the technology industry.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      date: '2023-12-28',
      created_at: '2023-12-28T00:00:00Z'
    },
    {
      id: 5,
      title: 'Technology Innovation',
      content: 'Our research and development team has achieved a breakthrough in quantum computing applications, opening new possibilities for our enterprise clients.\n\nThis breakthrough includes:\n\n• Quantum algorithm optimization\n• Enhanced processing power\n• Improved security protocols\n• Future-ready architecture\n\nThis innovation positions us at the forefront of quantum computing technology and opens new possibilities for our clients.',
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      date: '2023-12-20',
      created_at: '2023-12-20T00:00:00Z'
    },
    {
      id: 6,
      title: 'Customer Success Story',
      content: 'Learn how our solutions helped a Fortune 500 company increase their operational efficiency by 40% while reducing costs by 25%.\n\nTheir success story includes:\n\n• Streamlined operations\n• Cost reduction\n• Improved productivity\n• Enhanced customer satisfaction\n\nThis case study demonstrates the real-world impact of our technology solutions and the value we bring to our clients.',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
      date: '2023-12-15',
      created_at: '2023-12-15T00:00:00Z'
    }
  ];
  
  return newsList.find(n => n.id === parseInt(id)) || null;
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const news = getNews(params.id);
  
  if (!news) {
    return {
      title: 'News Not Found',
    };
  }

  return {
    title: `${news.title} - TechVision Solutions`,
    description: news.content.slice(0, 155),
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const news = getNews(params.id);

  if (!news) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link href="/news">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>

        <article>
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(news.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#00028C] mb-6">
              {news.title}
            </h1>
          </div>

          {news.image && (
            <div className="mb-8">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
              {news.content}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}