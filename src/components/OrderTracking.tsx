import React from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface OrderTrackingProps {
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  orderDate: string;
  estimatedDelivery?: string;
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ 
  status, 
  orderDate, 
  estimatedDelivery 
}) => {
  const steps = [
    {
      id: 'pending',
      title: 'Order Placed',
      description: 'Your order has been received',
      icon: CheckCircle,
      completed: true
    },
    {
      id: 'processing',
      title: 'Processing',
      description: 'We are preparing your items',
      icon: Package,
      completed: status === 'processing' || status === 'shipped' || status === 'delivered'
    },
    {
      id: 'shipped',
      title: 'Shipped',
      description: 'Your order is on the way',
      icon: Truck,
      completed: status === 'shipped' || status === 'delivered'
    },
    {
      id: 'delivered',
      title: 'Delivered',
      description: 'Your order has been delivered',
      icon: CheckCircle,
      completed: status === 'delivered'
    }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === status);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Order Tracking</h3>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-200">
          <div 
            className="bg-blue-600 w-full transition-all duration-500"
            style={{ height: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStepIndex;
            const isCompleted = step.completed;
            
            return (
              <div key={step.id} className="relative flex items-start">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 z-10 bg-white ${
                  isCompleted 
                    ? 'border-blue-600 text-blue-600' 
                    : isActive
                    ? 'border-blue-600 text-blue-600 animate-pulse'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {isActive && !isCompleted ? (
                    <Clock className="h-6 w-6" />
                  ) : (
                    <Icon className="h-6 w-6" />
                  )}
                </div>
                
                <div className="ml-4 flex-1">
                  <h4 className={`font-medium ${
                    isCompleted || isActive ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </h4>
                  <p className={`text-sm ${
                    isCompleted || isActive ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                  
                  {isActive && (
                    <div className="mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Current Status
                      </span>
                    </div>
                  )}
                </div>
                
                {index === 0 && (
                  <div className="text-right text-sm text-gray-500">
                    {new Date(orderDate).toLocaleDateString()}
                  </div>
                )}
                
                {index === steps.length - 1 && estimatedDelivery && status !== 'delivered' && (
                  <div className="text-right text-sm text-gray-500">
                    Est. {new Date(estimatedDelivery).toLocaleDateString()}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {status === 'shipped' && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">Tracking Information</h4>
          <p className="text-blue-700 text-sm mb-2">
            Tracking Number: <span className="font-mono">1Z999AA1234567890</span>
          </p>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Track with Carrier →
          </button>
        </div>
      )}
    </div>
  );
};