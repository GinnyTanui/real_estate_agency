import React from 'react';
import { FaBolt, FaMobileAlt, FaSearch, FaWhatsapp, FaRegBuilding, FaPenNib } from "react-icons/fa";
import { motion } from "framer-motion"; 
import Image1 from "../images/whatsapp_demo.PNG" 
import Image2 from "../images/seo-demo.PNG"
const Solutions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 space-y-20"> 

        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#1A3C40] mb-6 leading-snug">
          All-in-One Real Estate Website Solutions: Landing Pages, WhatsApp Leads & SEO
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We build high-performing real estate websites that not only look amazing but also help you capture more leads,
          close more deals, and rank higher on Google.
        </p>

        {/* 1️⃣ High-Converting Landing Pages */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div>
            <h2 className="text-3xl font-playfair text-[#1A3C40] mb-6">
              High-Converting Landing Pages That Sell Properties
            </h2>
            <p className="text-gray-700 font-inter mb-6 leading-relaxed">
              Your website is your <strong>first impression</strong>—and in real estate, trust and presentation matter.  
              We design <strong>fast, mobile-first landing pages</strong> that immediately capture attention and drive inquiries.
              These pages follow proven <strong>conversion-focused layouts</strong> that showcase listings beautifully.
            </p>
            <ul className="space-y-4 text-gray-700 font-inter">
              <li className="flex items-start gap-3">
                <FaBolt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Speed-optimized:</strong> A fast-loading page improves SEO and keeps buyers from bouncing off.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMobileAlt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Mobile-first design:</strong> Over 80% of property searches in Kenya are on mobile—your site will shine on any device.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaSearch className="text-[#E67E22] mt-1" />
                <span>
                  <strong>SEO-friendly structure:</strong> Built to rank for terms like “plots for sale in Rongai” or “gated communities Nairobi.”
                </span>
              </li>
            </ul>
          </div>
          {/* Video */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <video autoPlay loop muted playsInline className="rounded-xl shadow-lg border w-full  max-w-md">
              <source src="/videos/landing_demo.mp4" type="video/mp4"/>
            </video>
          </motion.div>
        </motion.div>

        {/* 2️⃣ WhatsApp Integration */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div 
            className="flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={Image1} alt="WhatsApp integration demo" className="rounded-xl shadow-lg border"/>
          </motion.div>
          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-playfair text-[#1A3C40] mb-6">
              One-Tap WhatsApp Lead Capture
            </h2>
            <p className="text-gray-700 font-inter mb-6 leading-relaxed">
              WhatsApp is the most preferred platform for real estate inquiries in Kenya. We integrate **one-tap WhatsApp buttons**, allowing instant communication with buyers.
            </p>
            <ul className="space-y-4 text-gray-700 font-inter">
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-[#25D366] mt-1" />
                <span>
                  <strong>Instant messaging:</strong> Eliminate long forms—buyers contact you instantly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaBolt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Real-time engagement:</strong> Faster responses = higher chance of converting warm leads.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMobileAlt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Pre-filled inquiries:</strong> Reduce response time with auto-generated buyer details and property context.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 3️⃣ Property Listings */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Video */}
          
          {/* Text */}
          <div>
            <h2 className="text-3xl font-playfair text-[#1A3C40] mb-6">
              Organized Property Listings & Filters
            </h2>
            <p className="text-gray-700 font-inter mb-6 leading-relaxed">
              Showcase all your properties in a clean, easy-to-navigate format. Our smart filters allow buyers to narrow searches by **price, location, and property type**—just like major portals.
            </p>
            <ul className="space-y-4 text-gray-700 font-inter">
              <li className="flex items-start gap-3">
                <FaRegBuilding className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Professional presentation:</strong> Beautiful grids with photos, pricing, and clear CTAs build buyer trust.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaSearch className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Smart filters:</strong> Save buyers time by letting them instantly find matching listings.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaBolt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Conversion-driven design:</strong> Inquiry buttons are strategically placed to maximize lead capture.
                </span>
              </li>
            </ul>
          </div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <video autoPlay loop muted playsInline className="rounded-xl shadow-lg border w-full max-w-md">
              <source src="/videos/property_demo.mp4" type="video/mp4"/>
            </video>
          </motion.div>
        </motion.div>

        {/* 4️⃣ SEO Blog */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <motion.div 
            className="flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={Image2} alt="SEO Blog demo" className="rounded-xl shadow-lg border"/>
          </motion.div>
          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-playfair text-[#1A3C40] mb-6">
              SEO-Optimized Blog to Rank on Google
            </h2>
            <p className="text-gray-700 font-inter mb-6 leading-relaxed">
              Publishing property tips, market updates, and local guides helps you rank for **buyer-ready keywords** like “plots in Kitengela” and “land for sale in Nairobi.”
            </p>
            <ul className="space-y-4 text-gray-700 font-inter">
              <li className="flex items-start gap-3">
                <FaPenNib className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Boost organic traffic:</strong> Blogs build long-term traffic that keeps generating free leads even while you sleep.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaBolt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Showcase authority:</strong> Educate buyers and establish yourself as a market expert.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMobileAlt className="text-[#E67E22] mt-1" />
                <span>
                  <strong>Cross-platform sharing:</strong> Share posts to social platforms with one click to drive more traffic.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 export default Solutions;