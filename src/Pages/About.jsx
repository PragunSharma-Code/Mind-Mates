import Footer from "../components/common/Footer";
import { motion } from "framer-motion";

function About() {
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
                            <path d="M24 44s-16-9.33-16-22A8 8 0 0 1 24 12a8 8 0 0 1 16 10c0 12.67-16 22-16 22Z" stroke="#06D6A0" strokeWidth="3" strokeLinejoin="round"/>
                        </svg>
                        <h1 className="text-6xl font-bold font-raleway tracking-wide">
                            <span className="font-parisienne text-[#06D6A0]">सेहत</span> Saathi
                        </h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl md:text-3xl max-w-3xl mx-auto mb-6 font-inter"
                    >
                        Empowering migrant workers with comprehensive digital healthcare access across Kerala.<br />
                        <span className="text-lg text-[#FFD166]">A Digital India initiative for inclusive healthcare.</span>
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

            {/* Info Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto px-4 py-20"
            >
                <h2 className="text-4xl font-bold mb-6 font-raleway text-[#06D6A0]">Our Mission</h2>
                <p className="text-2xl mb-10 text-[#444] font-inter">
                    Sehat Saathi is dedicated to bridging the healthcare gap for migrant workers in Kerala. By leveraging digital technology, we ensure that every worker, regardless of their background or language, has access to quality healthcare services, health records, and government schemes.
                </p>
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD166]">Key Features</h3>
                <ul className="list-disc pl-8 space-y-3 text-[#1b2330] text-lg">
                    <li>Multi-language support for seamless communication</li>
                    <li>Digital health records accessible anytime, anywhere</li>
                    <li>Integration with government health initiatives</li>
                    <li>Dedicated helpline and support center</li>
                    <li>Awareness programs and health camps</li>
                </ul>
            </motion.section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About;