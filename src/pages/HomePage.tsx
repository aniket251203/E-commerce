import React, { useMemo } from 'react';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductGrid } from '../components/ProductGrid';
import { useApp } from '../context/AppContext';

interface HomePageProps {
  onProductClick: (productId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onProductClick }) => {
  const { products, searchQuery, selectedCategory } = useApp();

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to ShopHub</h1>
          <p className="text-xl opacity-90 mb-6">
            Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="font-semibold">✓ Free Shipping</span>
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="font-semibold">✓ 30-Day Returns</span>
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="font-semibold">✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilter />

      {/* Results Info */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </h2>
        <span className="text-gray-600">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} onProductClick={onProductClick} />
    </div>
  );
};