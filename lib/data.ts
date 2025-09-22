// Static data for landing page
export interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  created_at: string;
}

export const staticNews: NewsItem[] = [
  {
    id: 1,
    title: 'Company Expands Operations',
    content: 'We are excited to announce our expansion into new markets, bringing innovative solutions to more customers worldwide.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    date: '2024-01-15',
    created_at: '2024-01-15T00:00:00Z'
  },
  {
    id: 2,
    title: 'New Product Launch',
    content: 'Introducing our latest product line designed to meet the evolving needs of our customers with cutting-edge technology.',
    image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
    date: '2024-01-10',
    created_at: '2024-01-10T00:00:00Z'
  },
  {
    id: 3,
    title: 'Industry Recognition',
    content: 'Our company has been recognized as a leader in innovation by industry experts and peer organizations.',
    image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
    date: '2024-01-05',
    created_at: '2024-01-05T00:00:00Z'
  }
];

export const staticProducts: Product[] = [
  {
    id: 1,
    name: 'Professional Software Suite',
    description: 'Comprehensive software solution for enterprise-level operations with advanced analytics and reporting.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
    created_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'Cloud Management Platform',
    description: 'Streamline your cloud infrastructure with our intuitive management platform and monitoring tools.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg',
    created_at: '2024-01-02T00:00:00Z'
  },
  {
    id: 3,
    name: 'Data Analytics Tool',
    description: 'Transform your data into actionable insights with our powerful analytics and visualization tool.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    created_at: '2024-01-03T00:00:00Z'
  },
  {
    id: 4,
    name: 'Security Framework',
    description: 'Comprehensive security solution to protect your digital assets and maintain compliance standards.',
    price: 399.99,
    image: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg',
    created_at: '2024-01-04T00:00:00Z'
  }
];
