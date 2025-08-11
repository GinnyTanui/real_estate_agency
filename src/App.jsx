import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Added for SEO

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Solutions from "./components/PainPoints";
import Testimonials from "./components/Testimonials";
import Packages from "./components/Packages";
import ContactForm from "./components/ContactForm";
import PainPoints from "./components/Problems";
import TemplateShowcase from "./components/Template";

const App = () => {
  // Schema Markup Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "GinnyTanui Real Estate",
    "description": "Professional real estate agency helping clients buy, sell, and rent properties in Rongai, Kitengela, Syokimau, and across Kenya.",
    "url": "https://www.ginnytanui.com",
    "logo": "https://www.ginnytanui.com/logo.png",
    "areaServed": { "@type": "Place", "name": "Kenya" },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254712345678",
      "contactType": "Customer Service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"]
    },
    "sameAs": [
      "https://www.facebook.com/ginnytanui",
      "https://www.instagram.com/ginnytanui",
      "https://www.linkedin.com/in/ginnytanui"
    ]
  };

  return (
    <Router>
      {/* SEO Head Tags */}
      <Helmet>
        <title>GT Realty - Buy, Sell & Rent in Kenya</title>
        <meta
          name="description"
          content="Helping clients buy, sell, and rent properties in Rongai, Kitengela, Syokimau, and across Kenya."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PainPoints />
              <Solutions />
              <Testimonials />
              <TemplateShowcase />
              <Packages />
              <ContactForm />
            </>
          }
        />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
