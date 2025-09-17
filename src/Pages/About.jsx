import Footer from "../components/common/Footer";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaChartLine, FaUserFriends, FaMapMarkedAlt, FaHeartbeat } from "react-icons/fa";
// import impactImg from "../assets/impact.jpg"; // Replace with your image path
// import healthCampImg from "../assets/healthcamp.jpg"; // Replace with your image path

// Animated Counter Component
function AnimatedCounter({ from = 0, to = 10000, duration = 2, className = "" }) {
    const [count, setCount] = useState(from);
    const ref = useRef();
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / (duration * 1000), 1);
            setCount(Math.floor(progress * (to - from) + from));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(to);
        };
        requestAnimationFrame(step);
    }, [inView, from, to, duration]);

    return (
        <span ref={ref} className={className}>
            {count.toLocaleString()}
        </span>
    );
}

function About() {
    // For animated bar chart
    const chartControls = useAnimation();
    const chartRef = useRef(null);
    const chartInView = useInView(chartRef, { once: true });

    useEffect(() => {
        if (chartInView) chartControls.start("visible");
    }, [chartInView, chartControls]);

    // Bar chart data
    const barData = [
        { label: "2022", value: 2000, color: "#06D6A0" },
        { label: "2023", value: 7000, color: "#FFD166" },
        { label: "2024", value: 12000, color: "#1b3ba3" },
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
                            <span className="text-3xl font-bold text-[#06D6A0]">
                                <AnimatedCounter from={0} to={12000} duration={2.5} />+
                            </span>
                            <span className="text-base mt-2 text-[#1b2330]">Migrant Workers Supported</span>
                            <span className="text-sm text-[#888]">Across construction, agriculture & services</span>
                        </div>
                        <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
                            <span className="text-3xl font-bold text-[#06D6A0]">
                                <AnimatedCounter from={0} to={14} duration={2.5} />
                            </span>
                            <span className="text-base mt-2 text-[#1b2330]">Districts Covered</span>
                            <span className="text-sm text-[#888]">Complete Kerala state coverage</span>
                        </div>
                        <div className="bg-[#f5f8fd] rounded-2xl px-12 py-8 shadow-lg flex flex-col items-center min-w-[220px]">
                            <span className="text-3xl font-bold text-[#FFD166]">
                                <AnimatedCounter from={0} to={100} duration={2.5} />%
                            </span>
                            <span className="text-base mt-2 text-[#1b2330]">Digital Integration</span>
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

            {/* Impact Section with Image and Text */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12"
            >
                {/* <img
                    src={impactImg}
                    alt="Impactful healthcare"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover max-h-[350px]"
                /> */}
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-[#1b2330] flex items-center gap-2">
                        <FaUserFriends className="text-[#06D6A0]" /> Our Impact
                    </h3>
                    <p className="text-xl text-[#444] mb-4">
                        Over <span className="font-bold text-[#06D6A0]"><AnimatedCounter from={0} to={12000} duration={2.5} /> migrant workers</span> have benefitted from our platform, gaining access to vital healthcare services, digital records, and support in their own language.
                    </p>
                    <p className="text-lg text-[#1b2330]">
                        Our outreach programs and health camps have reached remote areas, ensuring no one is left behind. We continue to expand our services, integrating with more clinics and government schemes every year.
                    </p>
                </div>
            </motion.section>

            {/* Animated Bar Chart Section */}
            <motion.section
                ref={chartRef}
                initial="hidden"
                animate={chartControls}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto px-4 py-20"
            >
                <h3 className="text-3xl font-bold mb-8 text-[#1b2330] flex items-center gap-2">
                    <FaChartLine className="text-[#FFD166]" /> Growth Over Years
                </h3>
                <div className="flex items-end gap-8 h-64 w-full">
                    {barData.map((bar, idx) => (
                        <motion.div
                            key={bar.label}
                            initial={{ height: 0 }}
                            animate={chartInView ? { height: `${(bar.value / 12000) * 100}%` } : { height: 0 }}
                            transition={{ delay: 0.2 + idx * 0.2, duration: 1.2, type: "spring" }}
                            className="flex flex-col items-center justify-end w-24"
                        >
                            <div
                                className="w-full rounded-t-xl"
                                style={{
                                    background: bar.color,
                                    height: "100%",
                                    minHeight: "10px",
                                    transition: "height 1s"
                                }}
                            >
                                <span className="block text-center text-white font-bold text-lg pt-2">
                                    <AnimatedCounter from={0} to={bar.value} duration={1.5} />
                                </span>
                            </div>
                            <span className="mt-3 text-lg font-semibold text-[#1b2330]">{bar.label}</span>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-[#888] mt-8 text-lg">
                    Consistent growth in the number of workers supported each year.
                </p>
            </motion.section>

            {/* Health Camp Section with Image */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row-reverse items-center gap-12"
            >
                {/* <img
                    src={healthCampImg}
                    alt="Health camp"
                    className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover max-h-[350px]"
                /> */}
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-[#1b2330] flex items-center gap-2">
                        <FaHeartbeat className="text-[#06D6A0]" /> Health Camps & Outreach
                    </h3>
                    <p className="text-xl text-[#444] mb-4">
                        We organize regular health camps in collaboration with local clinics and NGOs, providing free checkups, vaccinations, and health awareness sessions for migrant workers and their families.
                    </p>
                    <p className="text-lg text-[#1b2330]">
                        Our dedicated team ensures that every camp is accessible, inclusive, and impactful, helping thousands lead healthier lives.
                    </p>
                </div>
            </motion.section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About;