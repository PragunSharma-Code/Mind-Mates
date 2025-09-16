import { useNavigate } from "react-router-dom";
import Button1 from "../../common/Button1";

function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#1b3ba3] text-white px-4 py-1 flex justify-between items-center shadow-md">
            {/* Left part of the navbar */}
            <div className="ml-2 cursor-pointer flex items-center gap-4" onClick={() => navigate('/')}>
                <svg width="36" height="36" fill="none" viewBox="0 0 48 48">
                    <path d="M24 44s-16-9.33-16-22A8 8 0 0 1 24 12a8 8 0 0 1 16 10c0 12.67-16 22-16 22Z" stroke="#06D6A0" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
                <div>
                    <p className="font-bold leading-4">GOVERNMENT OF INDIA</p>
                    <p className="text-xs">Ministry of Health & Family Welfare</p>
                    <p className="text-xs text-[#FFD166]">Digital India Initiative</p>
                </div>
            </div>

            {/* Center links */}
            <div className="hidden md:flex gap-8 text-base font-semibold">
                <button onClick={() => navigate('/')} className="hover:text-[#FFD166] transition">Home</button>
                <button onClick={() => navigate('/about')} className="hover:text-[#FFD166] transition">About Us</button>
            </div>

            {/* Right part of the navbar */}
            <div className="flex items-center gap-x-3 mr-2">
                <Button1 label="Login" linkTo={'/login'}/>
                <Button1 label="Signup" linkTo={'/signup'}/>
                <select name="event" className="bg-[#4862c3] rounded-md px-4 py-2 text-sm">
                    <option value="event1">English</option>
                    <option value="event2">हिंदी</option>
                    <option value="event3">മലയാളം</option>
                    <option value="event4">தமிழ்</option>
                </select>
            </div>
        </div>
    );
};

export default Navbar;