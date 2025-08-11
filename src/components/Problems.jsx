import { FaTimesCircle } from "react-icons/fa";
import Image1 from "../images/worried_agent.jpg"
const PainPoints = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        
        {/* TEXT + PAIN POINTS */}
        <div>
          <h2 className="text-4xl font-bold text-[#1A3C40] mb-4 font-playfair">
            Struggling to Convert Property Browsers into Buyers?
          </h2>
          <p className="text-lg text-gray-700 mb-6 font-inter">
            You're not alone. Most agents face the same challenges when trying to stand out online.
          </p>
          
          <ul className="space-y-4">
            {[
              "No professional website – relying only on Facebook posts.",
              "Lost leads in DMs – no tracking or automation.",
              "Poor Google visibility – missing “plots in Rongai” searches.",
              "Unclear branding – low trust with high-ticket buyers.",
              "Manual follow-ups – slow responses = lost deals."
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border">
                <FaTimesCircle className="text-red-500 mt-1" />
                <span className="text-gray-800 font-inter">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="bg-[#1A3C40] rounded-xl p-1 w-full max-w-md mx-auto">
            <img 
              src={Image1} 
              alt="Real estate demo screenshot"
              className="rounded-xl shadow-xl border-4 border-white"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default PainPoints;
