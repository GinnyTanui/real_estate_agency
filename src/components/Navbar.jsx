// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-md text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand Name */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          GT Realty
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/solutions" className="hover:text-yellow-300 transition">Solutions</Link>
          <Link to="/testimonials" className="hover:text-yellow-300 transition">Testimonials</Link>
          <Link to="/packages" className="hover:text-yellow-300 transition">Packages</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 backdrop-blur-md">
          <div className="flex flex-col items-center space-y-4 py-6 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
