import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 pt-16 pb-8 bg-cover bg-no-repeat text-white bg-[url('/FruitlingCupSwap.png')] bg-[right_top] md:bg-[center_top]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
             <Link to="/" className="inline-block">
                <img
                  src="/logo-1.png"
                  alt="Fruitlinq"
                  className="h-12 w-auto object-contain"
                />
            </Link>
            <p className="text-white text-sm leading-relaxed">
              India’s first farm-controlled orange juice vending franchise. Bringing premium, hygienic, and fresh juice from farm to cup in just 55 seconds.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/fruitlinq/" className="text-white hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.facebook.com/fruitlinqagro/" className="text-white hover:text-blue-600 transition-colors"><Facebook className="h-5 w-5" /></a>
              
            </div>
          </div>
          

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-primary">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-primary">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Fruitlinq Agro Private Limited. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
