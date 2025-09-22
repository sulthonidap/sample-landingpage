import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { db } from '@/lib/db';
import type { Product } from '@/lib/types';
import { notFound } from 'next/navigation';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

function getProduct(id: string): Product | null {
  // Static data for now - we'll implement proper database queries later
  const products = [
    {
      id: 1,
      name: 'Professional Software Suite',
      description: 'Comprehensive software solution for enterprise-level operations with advanced analytics and reporting.',
      price: 299.99,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      created_at: '2024-01-15T00:00:00Z'
    },
    {
      id: 2,
      name: 'Cloud Management Platform',
      description: 'Streamline your cloud infrastructure with our intuitive management platform and monitoring tools.',
      price: 199.99,
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg',
      created_at: '2024-01-10T00:00:00Z'
    },
    {
      id: 3,
      name: 'Data Analytics Tool',
      description: 'Transform your data into actionable insights with our powerful analytics and visualization tool.',
      price: 149.99,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      created_at: '2024-01-05T00:00:00Z'
    },
    {
      id: 4,
      name: 'Security Framework',
      description: 'Comprehensive security solution to protect your digital assets and maintain compliance standards.',
      price: 399.99,
      image: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg',
      created_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 5,
      name: 'Mobile Development Kit',
      description: 'Complete toolkit for building cross-platform mobile applications with native performance.',
      price: 249.99,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      created_at: '2023-12-28T00:00:00Z'
    },
    {
      id: 6,
      name: 'AI Integration Platform',
      description: 'Seamlessly integrate artificial intelligence capabilities into your existing applications.',
      price: 349.99,
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      created_at: '2023-12-25T00:00:00Z'
    }
  ];
  
  return products.find(p => p.id === parseInt(id)) || null;
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const product = getProduct(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - TechVision Solutions`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <Link href="/products">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.image || 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-[#00028C] mb-4">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#F37526] text-[#F37526]" />
                  ))}
                </div>
                <span className="text-gray-600">(4.8/5 - 127 reviews)</span>
              </div>
            </div>

            <div>
              <Badge className="bg-[#F37526] hover:bg-[#e56620] text-white text-2xl px-4 py-2">
                ${product.price}
              </Badge>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#00028C] mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#00028C]">Key Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Enterprise-grade security and compliance</li>
                <li>• 24/7 technical support and maintenance</li>
                <li>• Scalable architecture for growing businesses</li>
                <li>• Integration with existing systems</li>
                <li>• Comprehensive training and documentation</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-[#F37526] hover:bg-[#e56620] text-lg py-3">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button variant="outline" className="flex-1 border-[#00028C] text-[#00028C] hover:bg-[#00028C] hover:text-white text-lg py-3">
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#00028C] mb-8 text-center">Additional Information</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <h4 className="font-semibold text-[#00028C] mb-2">Implementation</h4>
              <p className="text-gray-600">Quick setup within 24-48 hours with our expert team</p>
            </Card>
            <Card className="p-6 text-center">
              <h4 className="font-semibold text-[#00028C] mb-2">Support</h4>
              <p className="text-gray-600">24/7 premium support with dedicated account manager</p>
            </Card>
            <Card className="p-6 text-center">
              <h4 className="font-semibold text-[#00028C] mb-2">Guarantee</h4>
              <p className="text-gray-600">30-day money-back guarantee with no questions asked</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}