import React from "react";

export default function ConnectionsSection() {
    return (
        <section className="relative flex flex-col items-center mb-32 justify-center py-20 bg-white overflow-hidden">
            {/* Dotted background */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
                    backgroundSize: "24px 24px"
                }}
            />
            {/* Heading */}
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                We create seamless connections between<br />
                you and your audience.
            </h2>
            {/* Icons row */}
            <div className="relative z-10 flex items-center justify-center mb-8 space-x-8">
                {/* Left Icon */}
                <div className="flex flex-col items-center">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="6" y="3" width="12" height="18" rx="2" stroke="#6b7280" strokeWidth="2" /><circle cx="12" cy="17" r="1" fill="#6b7280" /></svg>
                    </div>
                </div>
                {/* Line/Arrow */}
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block"><path d="M0 12h40" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" /></svg>
                {/* Center Icon (highlighted) */}
                <div className="flex flex-col items-center">
                    <div className="bg-white border-2 border-blue-300 rounded-xl p-4 shadow-lg">
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" /></svg>
                    </div>
                </div>
                {/* Line/Arrow */}
                <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block"><path d="M0 12h40" stroke="#d1d5db" strokeWidth="2" strokeDasharray="4 4" /></svg>
                {/* Right Icon */}
                <div className="flex flex-col items-center">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#6b7280" strokeWidth="2" /><path d="M8 8h8v8H8z" stroke="#6b7280" strokeWidth="2" /></svg>
                    </div>
                </div>
            </div>
            {/* Subheading/Description */}
            <p className="relative z-10 text-center text-gray-500 max-w-2xl mx-auto mb-8 text-base md:text-lg">
                We specialize in building strong, direct connections between you and your audience, ensuring clear communication, increased engagement, and meaningful interactions. Our approach helps you understand your audience better and deliver the right message every time.
            </p>
            {/* Button */}
            <button className="relative z-10 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium shadow hover:bg-gray-800 transition">
                Get Access for free
            </button>
        </section>
    );
} 