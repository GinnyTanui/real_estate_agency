// src/pages/TemplateShowcase.jsx
import React from 'react';
import T1 from '../images/22.PNG'
import T2 from '../images/11.PNG'
const TemplateShowcase = () => {
  const phoneNumber = "254795771982"; // replace with your actual phone number
  const message = encodeURIComponent(
    "Hi! I’m interested in customizing the real estate website template."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl font-playfair text-[#1A3C40] font-bold mb-6">
          Your Dream Website, Ready in Minutes!
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          We’ve built a modern, professional real estate website template tailored for land sellers, residential agents, and gated communities. It’s mobile-friendly, fast, and beautifully designed — ready to customize to your brand, colors, and listings.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img
            src={T2}
            alt="Website template hero preview"
            className="rounded-xl shadow-lg"
          />
          <img
            src={T1}
            alt="Template listings page"
            className="rounded-xl shadow-lg"
          />
        </div>

        <p className="text-md text-gray-700 max-w-2xl mx-auto mb-10">
          Whether you’re in Rongai, Kitengela, Syokimau, or beyond — this template is a strong starting point to showcase your properties, generate leads through WhatsApp, and build your credibility as an agent. 
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1A3C40] text-white px-8 py-4 rounded-full hover:bg-[#163234] transition"
        >
          Customize This Template For Me →
        </a>
      </div>
    </section>
  );
};

export default TemplateShowcase;
