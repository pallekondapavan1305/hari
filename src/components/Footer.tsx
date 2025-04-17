//import React from 'react';
//import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Contact Form Section */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                You have plenty to deal with.<br />
                Leave the website to us!
              </h2>
              <p className="text-gray-400">
                We've got the skills, you've got the vision. Let's make something epic.
              </p>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF3D00] text-white py-3 rounded-lg hover:bg-[#FF5722] transition-colors"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="border-t border-gray-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Logo */}
            <div className="text-center md:text-left">
              {/* Replace with your company logo */}
              <img
                src="../im2.png"
                alt="Your Company"
                className="h-14 w-100"
              />
            </div>

            {/* Contact Info */}
            <div className="text-center text-gray-400 space-y-2">
              <p>Tel: 040-31733088</p>
              <p>India: (+91) 8886355612</p>
              <p>hr@talvox.com</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="https://www.facebook.com/profile.php?id=61565958100956"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://in.linkedin.com/company/talvox-pvt-ltd"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="linkdin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/talvoxpvtltd/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mt-16">
            <p>© {new Date().getFullYear()} Talvox. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;