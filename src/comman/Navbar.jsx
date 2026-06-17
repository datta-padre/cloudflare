import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">ShopEase</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white font-bold">
            Home
            </Link>
            <Link to="https://google.com" className="text-white font-bold">
            Products
            </Link>
            <a href="#" className="font-medium text-white hover:text-indigo-600 transition">
              Cart
            </a>
            <a href="#" className="font-medium text-white hover:text-indigo-600 transition">
              Profile
            </a>
            <a href="#" className="font-medium text-white hover:text-indigo-600 transition">
              Contact Us
            </a>
            <a href="#" className="font-medium text-white hover:text-indigo-600 transition">
              About Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded p-1"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation (conditional rendering) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
            Home
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
            Products
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
            Cart
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
            Profile
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
            Contact Us
          </a>
          <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition">
            About Us
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;