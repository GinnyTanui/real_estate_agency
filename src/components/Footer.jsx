import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1A3C40] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">GT Realty</h2>
          <p className="mt-3 text-gray-300">
            Helping you find your dream property in Kenya — from land to luxury homes.
          </p>
        </div>

        {/* Nav Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/solutions" className="hover:text-yellow-400">Solutions</Link></li>
            <li><Link to="/testimonials" className="hover:text-yellow-400">Testimonials</Link></li>
            <li><Link to="/packages" className="hover:text-yellow-400">Packages</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p>Email: ginnychemutai014@gmail.com</p>

          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com/share/15q5GKucMk/" target="_blank" rel="noreferrer">
              <Facebook className="hover:text-yellow-400" />
            </a>
            <a href="https://www.instagram.com/ginnytanui?igsh=dDcyZ3k3Zms4Njdi" target="_blank" rel="noreferrer">
              <Instagram className="hover:text-yellow-400" />
            </a>
            <a href="https://www.linkedin.com/in/ginny-tanui-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">
              <Linkedin className="hover:text-yellow-400" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} GT Realty. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
