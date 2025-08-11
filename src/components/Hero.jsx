import React from 'react';
import bgImage from '../images/hero_image.jpg'; 
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-playfair leading-tight mb-6">
          Convert Property Browsers into <span className="text-[#E67E22]">Serious Buyers</span>
        </h1>
        <p className="text-lg font-inter text-gray-200 mb-8">
          We build SEO-optimized, mobile-friendly real estate websites and landing pages
          tailored for Kenyan agents to attract more inquiries and close deals faster.
        </p>

        <button 
        className="px-8 py-4 bg-[#E67E22] hover:bg-[#cf6f1c] text-white font-semibold rounded-lg shadow-lg transition"
        onClick={handleButtonClick}
        >
          Book My Free Demo
        </button>

        {/* Social Proof */}
        <div className="mt-8 text-sm text-gray-200 font-inter">
            <p className="italic">
              “The site you built helped me get 3 new clients in my first week!” — Happy Agent in Nairobi
            </p>
            <p className="mt-2">Trusted by early-stage real estate agents in Kenya.</p>
          </div>
      </div>
    </section>
  );
};

export default Hero;
