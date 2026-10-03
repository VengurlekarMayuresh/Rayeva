import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AllProductsPage from './pages/AllProductsPage';
import Footer from './components/Footer';
import './styles/rayeva.css';

export default function App() {
  const [cartCount, setCartCount] = useState(2);
  const [toastMessage, setToastMessage] = useState(null);

  const handleAddToCart = (product) => {
    setCartCount(prev => prev + 1);
    setToastMessage(`Added "${product.name}" to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full font-sans antialiased text-gray-900 bg-[#f4f8f5] relative flex flex-col justify-between">
        
        {/* Main Content Area */}
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/shop" element={<AllProductsPage onAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<AllProductsPage onAddToCart={handleAddToCart} />} />
            <Route path="/category/:categoryId" element={<CategoryPage onAddToCart={handleAddToCart} />} />
            <Route path="/product/:productId" element={<ProductDetailPage onAddToCart={handleAddToCart} />} />
            <Route path="*" element={<Home onAddToCart={handleAddToCart} />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Cart Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-emerald-900 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-2xl border border-emerald-400/30 flex items-center gap-2 animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{toastMessage}</span>
          </div>
        )}

      </div>
    </BrowserRouter>
  );
}
