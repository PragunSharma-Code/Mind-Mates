import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
    return (
        <footer className="bg-[#1b2330] border-t border-[#222b3a] text-[#b5b5b5] px-6 py-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Left */}
                <div className="flex-1 min-w-[220px]">
                    <div className="flex items-center gap-2 mb-2">
                        <svg width="32" height="32" fill="none" viewBox="0 0 48 48">
                            <path d="M24 44s-16-9.33-16-22A8 8 0 0 1 24 12a8 8 0 0 1 16 10c0 12.67-16 22-16 22Z" stroke="#06D6A0" strokeWidth="3" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-xl font-bold font-raleway text-white">
                            <span className="font-parisienne text-[#06D6A0]">सेहत</span> Saathi
                        </span>
                    </div>
                    <p className="mb-4 text-sm">
                        Empowering migrant workers with comprehensive digital healthcare access across Kerala. A Digital India initiative for inclusive healthcare.
                    </p>
                    <div className="flex gap-4 text-xl text-[#06D6A0]">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
                {/* Center */}
                <div className="flex-1 min-w-[180px]">
                    <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-[#06D6A0] transition">About Us</a></li>
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Help Center</a></li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 min-w-[220px]">
                    <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
                    <div className="flex items-center gap-2 mb-2">
                        <MdPhone className="text-[#FFD166]" />
                        <span>1800-XXX-XXXX</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MdEmail className="text-[#FFD166]" />
                        <span>support@sehatSaathi.gov.in</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#222b3a] mt-8 pt-6 text-center text-xs text-[#888]">
                © 2024 Government of India - Ministry of Health & Family Welfare. All rights reserved.<br />
                Empowering migrant workers with digital healthcare access
            </div>
        </footer>
    );
}

export default Footer;