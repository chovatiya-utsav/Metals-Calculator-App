import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Mail, Phone, MapPin } from 'lucide-react';
import SmartAd from './Ads/SmartAd';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white overflow-x-hidden">
      {/* Footer Ad Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="mb-6">
          <SmartAd slot="1234567890" />
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gem className="text-yellow-400" size={24} />
              <span className="text-xl font-bold">Metals Calculator</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional metals pricing system with real-time calculations, GST computation, 
              and receipt generation for buying and selling scenarios.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-400" size={16} />
                <span className="text-gray-300 text-sm">support@metalscalculator.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-400" size={16} />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-yellow-400" size={16} />
                <span className="text-gray-300 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Metals Calculator. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 sm:mt-0">
              Made with ❤️ for jewelry professionals
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
