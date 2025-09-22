import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { staticProducts } from '@/lib/data';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'Layanan - PT Aghna Partnership',
  description: 'Layanan perencanaan konstruksi dan kajian kebijakan PT Aghna Partnership',
};

export default function ProductsPage() {
  const products = staticProducts;

  return (
    <div className="min-h-screen bg-[#DDE4EB]">
      <Header />
      <div className="container mx-auto px-4 py-32 md:px-32">
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
      <Footer />
    </div>
  );
}