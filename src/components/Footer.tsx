
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">6E</div>
            <p className="text-gray-300 mb-4">
              India's preferred airline, connecting dreams and destinations across the nation and beyond.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Book a Flight</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Check-in</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Flight Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manage Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Baggage</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">6E Add-ons</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">6E Rewards</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Travel Insurance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Group Booking</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Travel</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91-9999-123456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">support@goindigo.in</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Download App</h4>
              <div className="flex space-x-2">
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm transition-colors">
                  App Store
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm transition-colors">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 IndiGo Airlines. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
