import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 py-8 md:py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Simon Kadili</h3>
            <p className="text-gray-400 mb-4">
              Full Stack Developer creating modern web solutions with cutting-edge technologies.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                Dar es Salaam, Tanzania
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Phone className="w-5 h-5 mr-2 mt-0.5" />
                +255 714 52 96 20
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Mail className="w-5 h-5 mr-2 mt-0.5" />
                simonkadili47@gmail.com
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and projects.
            </p>
            <form className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Simon Kadili. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;