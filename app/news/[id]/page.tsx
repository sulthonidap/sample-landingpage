import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { staticNews } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

function getNews(id: string) {
  return staticNews.find(n => n.id === parseInt(id)) || null;
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
      <Header />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
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
      <Footer />
    </div>
  );
}