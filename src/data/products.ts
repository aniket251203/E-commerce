import { Product } from '../types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable fit',
      'Quick charge feature'
    ],
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    stockCount: 25
  },
  {
    id: '2',
    name: 'Smart Watch Series 7',
    price: 399.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1697120/pexels-photo-1697120.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'Advanced fitness tracking, heart rate monitoring, and seamless connectivity.',
    features: [
      'Fitness tracking',
      'Heart rate monitoring',
      'GPS enabled',
      'Water resistant',
      'All-day battery'
    ],
    rating: 4.6,
    reviewCount: 189,
    inStock: true,
    stockCount: 18
  },
  {
    id: '3',
    name: 'Professional Camera',
    price: 1299.99,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'High-resolution mirrorless camera perfect for professional photography.',
    features: [
      '24.2MP full-frame sensor',
      '4K video recording',
      'In-body stabilization',
      'Weather sealed',
      'Dual card slots'
    ],
    rating: 4.9,
    reviewCount: 76,
    inStock: true,
    stockCount: 8
  },
  {
    id: '4',
    name: 'Designer Backpack',
    price: 89.99,
    originalPrice: 119.99,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1545558/pexels-photo-1545558.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Fashion',
    description: 'Stylish and functional backpack perfect for work, travel, or everyday use.',
    features: [
      'Water-resistant material',
      'Laptop compartment',
      'Multiple pockets',
      'Comfortable straps',
      'Durable construction'
    ],
    rating: 4.4,
    reviewCount: 142,
    inStock: true,
    stockCount: 32
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Sports',
    description: 'Lightweight running shoes with superior cushioning and breathability.',
    features: [
      'Lightweight design',
      'Superior cushioning',
      'Breathable mesh',
      'Durable outsole',
      'Perfect fit'
    ],
    rating: 4.7,
    reviewCount: 298,
    inStock: true,
    stockCount: 44
  },
  {
    id: '6',
    name: 'Gaming Laptop',
    price: 1599.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'High-performance gaming laptop with RTX graphics and ultra-fast processor.',
    features: [
      'RTX 4060 Graphics',
      'Intel i7 processor',
      '16GB RAM',
      '1TB SSD',
      '144Hz display'
    ],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    stockCount: 12
  },
  {
    id: '7',
    name: 'Wireless Earbuds',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4219639/pexels-photo-4219639.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Electronics',
    description: 'True wireless earbuds with premium sound quality and long battery life.',
    features: [
      'True wireless design',
      'Premium sound',
      '8-hour battery',
      'Quick charge case',
      'Touch controls'
    ],
    rating: 4.5,
    reviewCount: 267,
    inStock: true,
    stockCount: 38
  },
  {
    id: '8',
    name: 'Coffee Maker',
    price: 199.99,
    image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4109743/pexels-photo-4109743.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    category: 'Home',
    description: 'Professional-grade coffee maker for the perfect cup every time.',
    features: [
      'Programmable brewing',
      '12-cup capacity',
      'Auto shut-off',
      'Hot plate warmer',
      'Easy cleaning'
    ],
    rating: 4.3,
    reviewCount: 89,
    inStock: true,
    stockCount: 21
  }
];