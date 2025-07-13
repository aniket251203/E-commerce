import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface CartSummaryProps {
  onViewCart: () => void;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ onViewCart }) => {
  const { cart, getCartTotal, getCartItemCount, removeFromCart } = useApp();

  if (cart.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-xl border p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 flex items-center">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Cart ({getCartItemCount()})
        </h3>
        <button
          onClick={onViewCart}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {cart.slice(0, 3).map((item) => (
          <div key={item.product.id} className="flex items-center space-x-2">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-10 h-10 object-cover rounded"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {item.product.name}
              </p>
              <p className="text-xs text-gray-500">
                {item.quantity} × ${item.product.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        {cart.length > 3 && (
          <p className="text-xs text-gray-500 text-center">
            +{cart.length - 3} more items
          </p>
        )}
      </div>
      
      <div className="border-t pt-3 mt-3">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-gray-900">Total:</span>
          <span className="font-bold text-lg text-blue-600">
            ${getCartTotal().toFixed(2)}
          </span>
        </div>
        <button
          onClick={onViewCart}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};