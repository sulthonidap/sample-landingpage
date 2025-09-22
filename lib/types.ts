export interface News {
  id: number;
  title: string;
  content: string;
  image?: string;
  date: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  created_at: string;
}

export interface Admin {
  id: number;
  username: string;
}