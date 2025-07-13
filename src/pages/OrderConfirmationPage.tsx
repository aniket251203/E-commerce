import React from 'react';
import { CheckCircle, Package, Truck, CreditCard } from 'lucide-react';
import { useApp } from '../context/AppContext';

interface OrderConfirmationPageProps {
  orderId: string;
  onContinueShopping: () => void;
}

export const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({ 
  orderId, 
  onContinueShopping 
}) => {
  const { orders } = useApp();
  
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Order not found.</p>
        </div>
      </div>
    );
  }

  const steps = [
    { 
      title: 'Order Confirmed', 
      description: 'Your order has been received',
      icon: CheckCircle,
      completed: true
    },
    { 
      title: 'Processing', 
      description: 'We are preparing your items',
      icon: Package,
      completed: false
    },
    { 
      title: 'Shipped', 
      description: 'Your order is on the way',
      icon: Truck,
      completed: false
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">Thank you for your purchase. Your order number is:</p>
        <p className="text-xl font-bold text-blue-600 mt-2">#{order.id}</p>
      </div>

      {/* Order Status Steps */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Status</h2>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 mb-2 ${
                  step.completed 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`font-medium ${step.completed ? 'text-green-600' : 'text-gray-500'}`}>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 text-center">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className={`w-full h-0.5 mt-4 ${
                    step.completed ? 'bg-green-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Details</h2>
        
        <div className="space-y-4 mb-6">
          {order.items.map((item) => (
            <div key={item.product.id} className="flex items-center space-x-4 py-4 border-b border-gray-200">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div className="text-lg font-semibold text-gray-900">
                ${(item.product.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${(order.total / 1.08).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">${(order.total - (order.total / 1.08)).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Address</h2>
        <div className="text-gray-700">
          <p>{order.shippingAddress.street}</p>
          <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
          <p>{order.shippingAddress.country}</p>
        </div>
      </div>

      {/* Expected Delivery */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <div className="flex items-center">
          <Truck className="h-6 w-6 text-blue-600 mr-3" />
          <div>
            <h3 className="font-semibold text-blue-900">Expected Delivery</h3>
            <p className="text-blue-700">
              {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onContinueShopping}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </button>
        <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-md font-medium hover:bg-gray-300 transition-colors">
          Track Order
        </button>
      </div>
    </div>
  );
};