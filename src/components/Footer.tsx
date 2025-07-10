import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Optivus</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Driving digital success through innovative marketing strategies and data-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-200">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors duration-200">Services</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors duration-200">Testimonials</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary transition-colors duration-200">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Social Media Marketing</span></li>
              <li><span className="text-gray-400">Search Engine Optimization</span></li>
              <li><span className="text-gray-400">Paid Advertising</span></li>
              <li><span className="text-gray-400">Branding & Logo Design</span></li>
              <li><span className="text-gray-400">Content Creation</span></li>
              <li><span className="text-gray-400">Email Marketing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@optivusmarketing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-gray-400">123 Marketing Street, Digital City, DC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Optivus Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;