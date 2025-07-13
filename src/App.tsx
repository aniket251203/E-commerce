import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { OrderConfirmationPage } from './pages/OrderConfirmationPage';
import { OrdersPage } from './pages/OrdersPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartSummary } from './components/CartSummary';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [completedOrderId, setCompletedOrderId] = useState<string | null>(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedProductId(null);
    setCompletedOrderId(null);
  };

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const handleOrderComplete = (orderId: string) => {
    setCompletedOrderId(orderId);
    setCurrentPage('order-confirmation');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onProductClick={handleProductClick} />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage 
            productId={selectedProductId} 
            onBack={() => setCurrentPage('home')} 
          />
        ) : (
          <HomePage onProductClick={handleProductClick} />
        );
      case 'cart':
        return (
          <CartPage 
            onCheckout={() => setCurrentPage('checkout')} 
            onContinueShopping={() => setCurrentPage('home')} 
          />
        );
      case 'orders':
        return (
          <OrdersPage 
            onBack={() => setCurrentPage('home')} 
          />
        );
      case 'about':
        return (
          <AboutPage 
            onBack={() => setCurrentPage('home')} 
          />
        );
      case 'contact':
        return (
          <ContactPage 
            onBack={() => setCurrentPage('home')} 
          />
        );
      case 'checkout':
        return (
          <CheckoutPage 
            onBack={() => setCurrentPage('cart')} 
            onOrderComplete={handleOrderComplete}
          />
        );
      case 'login':
        return (
          <LoginPage 
            onBack={() => setCurrentPage('home')} 
            onRegister={() => setCurrentPage('register')}
          />
        );
      case 'register':
        return (
          <RegisterPage 
            onBack={() => setCurrentPage('home')} 
            onLogin={() => setCurrentPage('login')}
          />
        );
      case 'order-confirmation':
        return completedOrderId ? (
          <OrderConfirmationPage 
            orderId={completedOrderId} 
            onContinueShopping={() => setCurrentPage('home')}
          />
        ) : (
          <HomePage onProductClick={handleProductClick} />
        );
      default:
        return <HomePage onProductClick={handleProductClick} />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onPageChange={handlePageChange} currentPage={currentPage} />
        <main>
          {renderPage()}
        </main>
        
        {/* Floating Cart Summary */}
        {currentPage !== 'cart' && currentPage !== 'checkout' && (
          <CartSummary onViewCart={() => setCurrentPage('cart')} />
        )}
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">ShopHub</h3>
                <p className="text-gray-300">
                  Your one-stop shop for amazing products at unbeatable prices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Customer Service</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2025 ShopHub. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;