import { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaWhatsapp } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "+254795771982"; // Change to your agency's number
    const encodedMessage = encodeURIComponent(
      `Hello, my name is ${formData.name}. \n\n${formData.message}\n\nYou can reach me at: ${formData.email}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white py-16" id="contact">
      <div className="container mx-auto px-6 md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-playfair text-[#1A3C40] text-center mb-8">
          Book Your Free Demo
        </h2>
        <form 
          onSubmit={handleSubmit} 
          className="bg-[#F8F9FA] p-8 rounded-xl shadow-lg space-y-6"
        >
          {/* Name Field */}
          <div>
            <label className="block text-gray-700 font-inter mb-2">Full Name</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email/Phone Field */}
          <div>
            <label className="block text-gray-700 font-inter mb-2">Email / Phone</label>
            <div className="flex items-center border rounded-lg px-3">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="text"
                name="email"
                placeholder="Enter your email or phone"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-inter mb-2">Message</label>
            <div className="flex items-start border rounded-lg px-3">
              <FaCommentDots className="text-gray-500 mt-4 mr-2" />
              <textarea
                name="message"
                placeholder="Tell us about your real estate needs..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 bg-transparent outline-none"
                rows="4"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#E67E22] hover:bg-[#cf6f1c] text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition"
          >
            <FaWhatsapp className="text-xl" />
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
export default ContactForm;