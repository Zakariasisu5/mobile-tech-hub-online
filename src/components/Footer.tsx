
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Repairs", href: "/repairs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Screen Repair", href: "/repairs" },
    { name: "Battery Replacement", href: "/repairs" },
    { name: "Water Damage", href: "/repairs" },
    { name: "Camera Repair", href: "/repairs" },
    { name: "Software Issues", href: "/repairs" },
  ];

  const brands = [
    { name: "iPhone Repair", href: "/products?category=iphone" },
    { name: "Samsung Repair", href: "/products?category=samsung" },
    { name: "Google Pixel", href: "/products?category=others" },
    { name: "OnePlus", href: "/products?category=others" },
    { name: "Other Brands", href: "/products?category=others" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PhoneFix Pro</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted local smartphone repair experts since 2016. Fast, reliable, and affordable 
              repairs with genuine parts and warranty included.
            </p>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-sm text-gray-300 ml-2">4.9/5 (156 reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  Book Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+15551234567" className="text-white hover:text-blue-400">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:info@phonefixpro.com" className="text-white hover:text-blue-400">
                    info@phonefixpro.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <p className="text-white">123 Tech Street<br />Downtown, City 12345</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Hours</p>
                  <p className="text-white text-sm">Mon-Fri: 9AM-7PM<br />Sat: 10AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} PhoneFix Pro. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/admin" className="hover:text-white transition-colors">
                Admin
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-gray-500">
            🚨 Emergency Water Damage Service: Call (555) 911-PHONE - Available 24/7
          </div>
        </div>
      </div>
    </footer>
  );
};
