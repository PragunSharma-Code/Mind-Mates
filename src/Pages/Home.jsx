import { motion } from "framer-motion";
import Navbar from "../components/core/Homepage/Navbar";
import Footer from "../components/common/Footer";
import { FaRegHospital, FaLanguage, FaClinicMedical, FaBell, FaChartBar } from "react-icons/fa";

function Home() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-br from-[#eaf1fb] via-white to-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <svg width="56" height="56" fill="none" viewBox="0 0 48 48">
                            <path d="M24 44s-16-9.33-16-22A8 8 0 0 1 24 12a8 8 0 0 1 16 10c0 12.67-16 22-16 22Z" stroke="#06D6A0" strokeWidth="3" strokeLinejoin="round"/>
                        </svg>
                        <h1 className="text-6xl font-bold font-raleway tracking-wide text-[#1b2330]">
                            <span className="font-parisienne text-[#06D6A0]">सेहत</span> Saathi
                        </h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl md:text-3xl max-w-3xl mx-auto mb-6 font-inter text-[#1b2330]"
                    >
                        Empowering Migrant Workers with Digital Healthcare<br />
                        <span className="text-lg text-[#FFD166]">प्रवासी कामगारों को उन्नत डिजिटल स्वास्थ्य सेवा से सशक्त बनाना</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className="flex justify-center gap-8 mt-8 flex-wrap"
                    >
                        <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
                            <span className="text-3xl font-bold text-[#06D6A0]">12,000+</span>
                            <span className="text-base mt-2 text-[#1b2330]">Migrant Workers Supported</span>
                            <span className="text-sm text-[#888]">Across construction, agriculture & services</span>
                        </div>
                        <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
                            <span className="text-3xl font-bold text-[#06D6A0]">14</span>
                            <span className="text-base mt-2 text-[#1b2330]">Districts Covered</span>
                            <span className="text-sm text-[#888]">Complete Kerala state coverage</span>
                        </div>
                        <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
                            <span className="text-3xl font-bold text-[#FFD166]">100%</span>
                            <span className="text-base mt-2 text-[#1b2330]">Digital Integration</span>
                            <span className="text-sm text-[#888]">With Digital India & Ayushman Bharat</span>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4 py-20"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1b2330] font-raleway">
                    Comprehensive Healthcare Features
                </h2>
                <p className="text-2xl text-center mb-14 text-[#444] font-inter">
                    Everything you need to manage your health journey in Kerala
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #06D6A055" }}
                        className="bg-white border border-[#e3e8f0] rounded-2xl p-10 flex flex-col items-center shadow transition"
                    >
                        <FaRegHospital className="text-4xl text-[#06D6A0] mb-3" />
                        <h3 className="font-bold text-xl text-[#1b2330] mb-1">Health Records</h3>
                        <a href="#" className="text-[#06D6A0] text-base underline mb-1">Access & update records</a>
                        <p className="text-sm text-[#888] text-center">Easy viewing of all medical history.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #06D6A055" }}
                        className="bg-white border border-[#e3e8f0] rounded-2xl p-10 flex flex-col items-center shadow transition"
                    >
                        <FaLanguage className="text-4xl text-[#06D6A0] mb-3" />
                        <h3 className="font-bold text-xl text-[#1b2330] mb-1">Language Support</h3>
                        <span className="text-[#06D6A0] text-base mb-1">Multi-language support</span>
                        <p className="text-sm text-[#888] text-center">Malayalam, Hindi, English, Tamil.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #FFD16655" }}
                        className="bg-white border border-[#e3e8f0] rounded-2xl p-10 flex flex-col items-center shadow transition"
                    >
                        <FaClinicMedical className="text-4xl text-[#FFD166] mb-3" />
                        <h3 className="font-bold text-xl text-[#1b2330] mb-1">Nearby Clinics</h3>
                        <a href="#" className="text-[#06D6A0] text-base underline mb-1">Locate & book appointments</a>
                        <p className="text-sm text-[#888] text-center">Integrated map and scheduling.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #FFD16655" }}
                        className="bg-white border border-[#e3e8f0] rounded-2xl p-10 flex flex-col items-center shadow transition"
                    >
                        <FaBell className="text-4xl text-[#FFD166] mb-3" />
                        <h3 className="font-bold text-xl text-[#1b2330] mb-1">Emergency Alerts</h3>
                        <span className="text-[#06D6A0] text-base mb-1">Instant Notifications</span>
                        <p className="text-sm text-[#888] text-center">Critical health & safety alerts.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #06D6A055" }}
                        className="bg-white border border-[#e3e8f0] rounded-2xl p-10 flex flex-col items-center shadow transition"
                    >
                        <FaChartBar className="text-4xl text-[#06D6A0] mb-3" />
                        <h3 className="font-bold text-xl text-[#1b2330] mb-1">Analytics</h3>
                        <span className="text-[#06D6A0] text-base mb-1">Health Insights</span>
                        <p className="text-sm text-[#888] text-center">Track health trends & progress.</p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;