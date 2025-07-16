'use client'
import React from 'react';
import { FiShoppingCart, FiUser, FiSearch, FiHeart, FiMenu, FiX } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import { BsShieldCheck, BsTruck, BsCurrencyExchange } from 'react-icons/bs';

const Storefront = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [products] = React.useState([
    {
      id: 1,
      name: 'Minimalist Chair',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
      category: 'Furniture',
      isNew: true
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Electronics',
      isNew: false
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80',
      category: 'Clothing',
      isNew: true
    },
    {
      id: 4,
      name: 'Ceramic Plant Pot',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1584735422186-97a4f0b03c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'Home Decor',
      isNew: false
    }
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <button 
                className="md:hidden text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
              <h1 className="text-2xl font-bold text-gray-800">MODERN<span className="text-indigo-600">STORE</span></h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Shop</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Collections</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">About</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-indigo-600 transition">
                <FiSearch size={20} />
              </button>
              <button className="text-gray-700 hover:text-indigo-600 transition">
                <FiUser size={20} />
              </button>
              <button className="text-gray-700 hover:text-indigo-600 transition relative">
                <FiHeart size={20} />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </button>
              <button className="text-gray-700 hover:text-indigo-600 transition relative">
                <FiShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white py-4 border-t">
              <div className="flex flex-col space-y-3">
                <a href="#" className="text-gray-700 hover:text-indigo-600 transition py-2">Home</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 transition py-2">Shop</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 transition py-2">Collections</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 transition py-2">About</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 transition py-2">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl overflow-hidden mb-12">
          <div className="container mx-auto px-8 py-16 text-white">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">Summer Collection 2023</h2>
              <p className="text-lg mb-6">Discover our new arrivals with up to 30% off on selected items.</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                      New
                    </span>
                  )}
                  <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
                    <FiHeart className="text-gray-700" />
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    <button className="text-indigo-600 hover:text-indigo-800 transition">
                      <FiShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <BsTruck className="text-indigo-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">Free Shipping</h3>
                <p className="text-gray-600">On all orders over $50</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <BsCurrencyExchange className="text-indigo-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">30-Day Returns</h3>
                <p className="text-gray-600">Money back guarantee</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <BsShieldCheck className="text-indigo-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-1">Secure Checkout</h3>
                <p className="text-gray-600">100% secure payment</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MODERN<span className="text-indigo-400">STORE</span></h3>
              <p className="text-gray-400 mb-4">Curated products for the modern lifestyle.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaPinterest size={20} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">All Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Featured</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Our Story</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Sustainability</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping & Returns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2023 ModernStore. All rights reserved.</p>
            <div className="flex space-x-6">
              <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25?text=Amex" alt="American Express" className="h-6" />
              <img src="https://via.placeholder.com/40x25?text=PayPal" alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Storefront;