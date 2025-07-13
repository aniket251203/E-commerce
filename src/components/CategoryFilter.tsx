import React from 'react';
import { useApp } from '../context/AppContext';

export const CategoryFilter: React.FC = () => {
  const { products, selectedCategory, setSelectedCategory } = useApp();
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};