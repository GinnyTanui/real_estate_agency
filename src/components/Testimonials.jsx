import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-playfair text-[#1A3C40] mb-12 leading-snug">
          What Local Real Estate Agents Say About Working With Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic text-gray-700">
              "Since I got my website redesigned, I’ve noticed a clear boost in credibility. Clients now take me more seriously, and I’ve closed two deals directly from leads who found me online!"
            </p>
            <h4 className="mt-4 font-semibold text-[#1A3C40]">
              Jane Mwangi – Real Estate Agent, Rongai
            </h4>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic text-gray-700">
              "I never thought a simple WhatsApp button would make such a difference. I started getting inquiries the very next day. It’s user-friendly and has made communication so much easier."
            </p>
            <h4 className="mt-4 font-semibold text-[#1A3C40]">
              Peter Kamau – Land Seller, Kitengela
            </h4>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic text-gray-700">
              "As a new agent, I was struggling to stand out. The site you built gave me a professional image and a platform to showcase my listings. People now say it feels like a 'real' company."
            </p>
            <h4 className="mt-4 font-semibold text-[#1A3C40]">
              Mercy Achieng – New Agent, Thika Road
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
