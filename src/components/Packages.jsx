import { FaCheckCircle } from "react-icons/fa";

const packages = [
  {
    title: "Frontend: Starter – Get Online Fast",
    price: "KSh 12,000",
    category: "Frontend Only",
    description: "Perfect for agents who just need an attractive, mobile-friendly website to showcase their brand.",
    features: [
      "1-page Landing Page (React + Tailwind)",
      "Responsive, fast-loading design",
      "WhatsApp Click-to-Chat integration",
      "Basic contact form (email only)"
    ]
  },
  {
    title: "Frontend: Value – Lead-Ready Agent",
    price: "KSh 18,000",
    category: "Frontend Only",
    description: "Ideal for agents who want a website plus lead capture tools to connect with clients faster.",
    popular: true,
    features: [
      "Everything in Starter",
      "Multi-page website (Home, About, Contact)",
      "Google Business Profile Setup",
      "Property showcase section (static – you send me details, I add them)"
    ]
  },
  {
    title: "Full-Stack: Premium – Property Manager",
    price: "KSh 35,000 – 50,000",
    category: "Full-Stack",
    description: "A complete property management platform with backend and database — you can add, edit, and manage your own listings anytime.",
    features: [
      "Everything in Value package",
      "Django REST API backend setup",
      "Admin panel for property management",
      "Add/edit/delete property listings yourself",
      "Property search filters (by location, type, price)",
      "Image uploads for each property",
      "Lead capture form with database storage",
      "Basic SEO optimization + Google Analytics"
    ]
  }
];

// Function to handle WhatsApp redirection
const handleChoose = (pkgTitle) => {
  const phoneNumber = "254795771982"; // <-- Replace with your WhatsApp number (in international format, no + sign)
  const message = `Hi! I am interested in the "${pkgTitle}" package. Can you share more details?`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

const Packages = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1A3C40] mb-12">
          Choose Your Package
        </h2>

        {/* Frontend Packages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#E67E22] mb-6">Frontend Only</h3>
          <div className="space-y-6">
            {packages.filter(pkg => pkg.category === "Frontend Only").map((pkg, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-start md:items-center p-6 bg-white shadow-lg rounded-xl border hover:shadow-xl transition-transform hover:scale-[1.02] ${pkg.popular ? 'border-[#E67E22]' : 'border-gray-200'}`}
              >
                <div className="flex-1">
                  {pkg.popular && <span className="text-xs bg-[#E67E22] text-white px-3 py-1 rounded-full">Most Popular</span>}
                  <h4 className="text-xl font-bold mt-2">{pkg.title}</h4>
                  <p className="text-gray-600 mb-3">{pkg.description}</p>
                  <ul className="space-y-1 text-gray-700">
                    {pkg.features.map((feat, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" /> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center">
                  <p className="text-2xl font-bold text-[#E67E22]">{pkg.price}</p>
                  <button
                    onClick={() => handleChoose(pkg.title)}
                    className="mt-3 px-5 py-2 bg-[#E67E22] text-white rounded-lg hover:bg-[#cf6f1c] transition"
                  >
                    Choose
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full-Stack Package */}
        <div>
          <h3 className="text-2xl font-semibold text-[#E67E22] mb-6">Full-Stack</h3>
          <div className="bg-gradient-to-br from-[#E67E22] to-[#cf6f1c] text-white p-8 rounded-xl shadow-xl hover:scale-[1.02] transition-transform">
            <h4 className="text-2xl font-bold">{packages[2].title}</h4>
            <p className="mt-2 text-gray-100">{packages[2].description}</p>
            <ul className="mt-4 space-y-2">
              {packages[2].features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-white" /> {feat}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-2xl font-bold">{packages[2].price}</p>
              <button
                onClick={() => handleChoose(packages[2].title)}
                className="px-6 py-2 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-gray-100"
              >
                Choose
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Packages;
