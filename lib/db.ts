import Database from 'better-sqlite3';
import { hash } from 'bcryptjs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data.db');
const db = new Database(dbPath);

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    image TEXT,
    date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// Seed admin user if not exists
const adminCount = db.prepare('SELECT COUNT(*) as count FROM admins').get() as { count: number };
if (adminCount.count === 0) {
  hash('admin123', 12).then(hashedPassword => {
    db.prepare('INSERT INTO admins (username, password) VALUES (?, ?)').run('admin', hashedPassword);
  });
}

// Seed sample data if tables are empty
const newsCount = db.prepare('SELECT COUNT(*) as count FROM news').get() as { count: number };
if (newsCount.count === 0) {
  const sampleNews = [
    {
      title: 'Company Expands Operations',
      content: 'We are excited to announce our expansion into new markets, bringing innovative solutions to more customers worldwide.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      date: '2024-01-15'
    },
    {
      title: 'New Product Launch',
      content: 'Introducing our latest product line designed to meet the evolving needs of our customers with cutting-edge technology.',
      image: 'https://images.pexels.com/photos/3184327/pexels-photo-3184327.jpeg',
      date: '2024-01-10'
    },
    {
      title: 'Industry Recognition',
      content: 'Our company has been recognized as a leader in innovation by industry experts and peer organizations.',
      image: 'https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg',
      date: '2024-01-05'
    }
  ];

  const insertNews = db.prepare('INSERT INTO news (title, content, image, date) VALUES (?, ?, ?, ?)');
  sampleNews.forEach(news => {
    insertNews.run(news.title, news.content, news.image, news.date);
  });
}

const productsCount = db.prepare('SELECT COUNT(*) as count FROM products').get() as { count: number };
if (productsCount.count === 0) {
  const sampleProducts = [
    {
      name: 'Professional Software Suite',
      description: 'Comprehensive software solution for enterprise-level operations with advanced analytics and reporting.',
      price: 299.99,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
    },
    {
      name: 'Cloud Management Platform',
      description: 'Streamline your cloud infrastructure with our intuitive management platform and monitoring tools.',
      price: 199.99,
      image: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg'
    },
    {
      name: 'Data Analytics Tool',
      description: 'Transform your data into actionable insights with our powerful analytics and visualization tool.',
      price: 149.99,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
    },
    {
      name: 'Security Framework',
      description: 'Comprehensive security solution to protect your digital assets and maintain compliance standards.',
      price: 399.99,
      image: 'https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg'
    }
  ];

  const insertProducts = db.prepare('INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)');
  sampleProducts.forEach(product => {
    insertProducts.run(product.name, product.description, product.price, product.image);
  });
}

export { db };