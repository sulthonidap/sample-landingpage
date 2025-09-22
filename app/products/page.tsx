import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { db } from '@/lib/db';
import type { Product } from '@/lib/types';

export const metadata = {
  title: 'Products - TechVision Solutions',
  description: 'Explore our comprehensive suite of technology solutions',
};

function getAllProducts(): Product[] {
  // Static data for now - we'll implement proper database queries later
  return [
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
}

export default function ProductsPage() {
  const products = getAllProducts();

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
          <h1 className="text-4xl font-bold text-[#00028C] mb-4">Our Products</h1>
          <p className="text-gray-600">Discover our comprehensive suite of technology solutions</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-all duration-300 bg-white">
              <CardHeader className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#00028C] mb-3">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <Badge className="bg-[#F37526] hover:bg-[#e56620] text-white text-lg px-3 py-1">
                    ${product.price}
                  </Badge>
                  <Link href={`/products/${product.id}`}>
                    <Button className="bg-[#00028C] hover:bg-[#000260]">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}