import React, { useState } from "react";

function Signup() {
  const [activeTab, setActiveTab] = useState("Worker");
  const [aadhaar, setAadhaar] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log({
      activeTab,
      aadhaar,
      phone,
      password,
      confirmPassword,
      employerId,
      company,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96 relative">
        <h2 className="text-center text-5xl font-extrabold mb-6 leading-[1.3] whitespace-nowrap bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent animate-gradient-x">
          सेहत Saathi
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Create an account for secure health monitoring
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded transition ${
              activeTab === "Worker"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("Worker")}
          >
            Worker
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeTab === "Employer"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab("Employer")}
          >
            Employer
          </button>
        </div>

        {/* Worker Signup Form */}
        <div
          className={`transition-all duration-500 ${
            activeTab === "Worker"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full absolute"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Aadhaar Number"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Employer Signup Form */}
        <div
          className={`transition-all duration-500 ${
            activeTab === "Employer"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full absolute"
          }`}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Employer ID"
              value={employerId}
              onChange={(e) => setEmployerId(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Gradient Animation Style */}
      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 300% 300%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default Signup;
