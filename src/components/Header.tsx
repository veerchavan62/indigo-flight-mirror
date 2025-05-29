
import { useState } from 'react';
import { Menu, X, User, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-blue-600">
              6E
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Book</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Manage</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Plan</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">More</a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-4 h-4" />
              <span>Login</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Book</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Manage</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Plan</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">More</a>
              <div className="flex items-center space-x-4 pt-4 border-t">
                <button className="flex items-center space-x-1 text-gray-700">
                  <Globe className="w-4 h-4" />
                  <span>EN</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-700">
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
