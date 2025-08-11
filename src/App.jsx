import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Added for SEO

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
  return (
    <Router>
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
