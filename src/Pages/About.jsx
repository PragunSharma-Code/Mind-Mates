import Footer from "../components/common/Footer";
import { motion } from "framer-motion";

function About() {
  const newsItems: string[] = [
    "Health Mission launches migrant wellness program…",
    "New vaccination drive covers 10,000 workers…",
    "Kerala hospitals integrate Sehat Saathi records…",
  ];

  const imageUrls: string[] = [
    "public\images\whatsapp1.jpg",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1b2330]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-br from-[#eaf1fb] via-white to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg width="56" height="56" fill="none" viewBox="0 0 48 48">
              <path
                d="M24 44s-16-9.33-16-22A8 8 0 0 1 24 12a8 8 0 0 1 16 10c0 12.67-16 22-16 22Z"
                stroke="#06D6A0"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
            <motion.h1
              className="text-6xl font-bold font-raleway tracking-wide"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-[#06D6A0]">सेहत</span> <span className="text-[#1b2330]">Saathi</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl max-w-3xl mx-auto mb-6 font-inter"
          >
            Empowering migrant workers with comprehensive digital healthcare access across Kerala. <br />
            <span className="text-lg text-[#FFD166]">
              A Digital India initiative for inclusive healthcare.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex justify-center gap-8 mt-8 flex-wrap"
          >
            <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
              <span className="text-3xl font-bold text-[#06D6A0]">12,000+</span>
              <span className="text-base mt-2">Migrant Workers Supported</span>
              <span className="text-sm text-[#888]">Across construction, agriculture & services</span>
            </div>
            <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
              <span className="text-3xl font-bold text-[#06D6A0]">14</span>
              <span className="text-base mt-2">Districts Covered</span>
              <span className="text-sm text-[#888]">Complete Kerala state coverage</span>
            </div>
            <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
              <span className="text-3xl font-bold text-[#FFD166]">100%</span>
              <span className="text-base mt-2">Digital Integration</span>
              <span className="text-sm text-[#888]">With Digital India & Ayushman Bharat</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-4 py-20"
      >
        <h2 className="text-4xl font-bold mb-6 font-raleway text-[#06D6A0]">Our Mission</h2>
        <p className="text-2xl mb-10 text-[#444] font-inter">
          Sehat Saathi bridges healthcare gaps for Kerala’s migrant workforce, ensuring that every worker—regardless of language or background—can access quality healthcare, records, and government schemes through a single digital platform.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-[#FFD166]">What We Provide</h3>
        <ul className="list-disc pl-8 space-y-3 text-lg">
          <li>Multi-language interface for workers and employers</li>
          <li>Secure digital health records accessible anytime</li>
          <li>Integration with Ayushman Bharat & state schemes</li>
          <li>Real-time health alerts and reminders</li>
          <li>Support helpline and telemedicine features</li>
          <li>Awareness drives and preventive health camps</li>
        </ul>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#f5f8fd] py-20 px-6"
      >
        <h2 className="text-4xl font-bold mb-12 text-center text-[#06D6A0]">How Sehat Saathi Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs">
            <h4 className="font-bold text-[#06D6A0] text-xl">1. Register</h4>
            <p className="mt-2 text-[#555]">
              Workers sign up using Aadhaar & phone; employers onboard teams.
            </p>
          </div>
          <span className="text-4xl">➡️</span>
          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs">
            <h4 className="font-bold text-[#FFD166] text-xl">2. Upload Records</h4>
            <p className="mt-2 text-[#555]">
              Health records are digitized and securely stored.
            </p>
          </div>
          <span className="text-4xl">➡️</span>
          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs">
            <h4 className="font-bold text-[#06D6A0] text-xl">3. Access Care</h4>
            <p className="mt-2 text-[#555]">
              Workers access doctors, telemedicine & schemes anytime.
            </p>
          </div>
          <span className="text-4xl">➡️</span>
          <div className="bg-white p-6 rounded-xl shadow-md text-center max-w-xs">
            <h4 className="font-bold text-[#06D6A0] text-xl">4. Monitor</h4>
            <p className="mt-2 text-[#555]">
              Employers and NGOs monitor health trends for timely action.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Leadership + News + Links in one row */}
      <div className="flex flex-col md:flex-row gap-8 px-6 py-12">
        {/* Leadership */}
        <section className="flex-1 bg-[#f5f8fd] p-6 text-center rounded-xl">
          <h2 className="text-2xl font-bold text-[#06D6A0] mb-4">Leadership</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-sm">
              Hon'ble Minister of Ayush
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-sm">
              Minister of State of Health
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-sm">
              PM of India
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-sm">
              CM of Kerala
            </div>
          </div>
        </section>

        {/* Latest Health News */}
        <section className="flex-1 bg-white p-6 text-center rounded-xl">
          <h2 className="text-2xl font-bold text-[#06D6A0] mb-4">Latest Health News</h2>
          {/* News Text */}
          <div className="overflow-hidden relative mb-6">
            <div className="animate-marquee whitespace-nowrap">
              {newsItems.map((item, index) => (
                <span key={index} className="mx-4 text-sm font-medium">{item}</span>
              ))}
            </div>
          </div>

          {/* Image Scroller */}
          <div className="overflow-hidden relative mt-4">
            <div className="flex animate-marquee-slow">
              {[...imageUrls, ...imageUrls].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`health-${index}`}
                  className="h-32 mx-4 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Important Links */}
        <section className="flex-1 bg-[#f5f8fd] p-6 text-center rounded-xl">
          <h2 className="text-2xl font-bold text-[#06D6A0] mb-4">Important Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-[#1b2330] hover:text-[#06D6A0] underline">
                Health Management Information System
              </a>
            </li>
            <li>
              <a href="#" className="text-[#1b2330] hover:text-[#06D6A0] underline">
                Central Health Scheme
              </a>
            </li>
            <li>
              <a href="#" className="text-[#1b2330] hover:text-[#06D6A0] underline">
                Medical Counselling Seats
              </a>
            </li>
            <li>
              <a href="#" className="text-[#1b2330] hover:text-[#06D6A0] underline">
                National Health Mission
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Email Updates Section */}
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#06D6A0] mb-4">Get Email Updates</h2>
        <p className="text-[#555] mb-6">
          Stay informed about the latest initiatives, schemes, and health alerts.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-[#06D6A0]"
          />
          <button
            type="submit"
            className="bg-[#06D6A0] text-white px-6 py-2 rounded-xl hover:bg-[#05b88b] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer />

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-flex;
        }

        @keyframes marquee-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default About;
