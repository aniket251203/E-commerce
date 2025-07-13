import React from 'react';
import { Package, Eye, Download } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { OrderTracking } from '../components/OrderTracking';

interface OrdersPageProps {
  onBack: () => void;
}

export const OrdersPage: React.FC<OrdersPageProps> = ({ onBack }) => {
  const { orders, user } = useApp();
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-500 text-lg">Please log in to view your orders.</p>
          <button
            onClick={onBack}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const userOrders = orders.filter(order => order.userId === user.id);

  if (userOrders.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
        <div className="text-center py-12">
          <Package className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
          <p className="text-gray-600 mb-8">When you place your first order, it will appear here.</p>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  const selectedOrderData = selectedOrder ? userOrders.find(o => o.id === selectedOrder) : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
      
      {selectedOrderData ? (
        <div>
          <button
            onClick={() => setSelectedOrder(null)}
            className="flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Orders
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Order #{selectedOrderData.id}
                </h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-medium">
                      {new Date(selectedOrderData.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium capitalize ${
                      selectedOrderData.status === 'delivered' ? 'text-green-600' :
                      selectedOrderData.status === 'shipped' ? 'text-blue-600' :
                      selectedOrderData.status === 'processing' ? 'text-yellow-600' :
                      'text-gray-600'
                    }`}>
                      {selectedOrderData.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total:</span>
                    <span className="font-bold text-lg">
                      ${selectedOrderData.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Order Items */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Items Ordered</h3>
                <div className="space-y-4">
                  {selectedOrderData.items.map((item) => (
                    <div key={item.product.id} className="flex items-center space-x-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-gray-600">${item.product.price.toFixed(2)} each</p>
                      </div>
                      <div className="text-lg font-semibold text-gray-900">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Address</h3>
                <div className="text-gray-700">
                  <p>{selectedOrderData.shippingAddress.street}</p>
                  <p>
                    {selectedOrderData.shippingAddress.city}, {selectedOrderData.shippingAddress.state} {selectedOrderData.shippingAddress.zipCode}
                  </p>
                  <p>{selectedOrderData.shippingAddress.country}</p>
                </div>
              </div>
            </div>
            
            {/* Order Tracking */}
            <div>
              <OrderTracking 
                status={selectedOrderData.status}
                orderDate={selectedOrderData.createdAt}
                estimatedDelivery={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString()}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {userOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order #{order.id}
                  </h3>
                  <p className="text-gray-600">
                    Placed on {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">
                    ${order.total.toFixed(2)}
                  </p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                    order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                    order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                    order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                {order.items.slice(0, 3).map((item) => (
                  <img
                    key={item.product.id}
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                ))}
                {order.items.length > 3 && (
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center text-gray-500 text-sm">
                    +{order.items.length - 3}
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedOrder(order.id)}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Download Invoice</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};