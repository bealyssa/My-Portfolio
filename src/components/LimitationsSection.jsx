import React from "react";

export default function LimitationsSection() {
    return (
        <section className="relative flex flex-col mb-32 items-center justify-center py-20 bg-white overflow-hidden">
            {/* Gradient background */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] h-[350px] bg-gradient-to-b from-purple-400/60 to-transparent rounded-b-full blur-2xl z-0" />
            {/* Star Icon */}
            <div className="relative z-10 flex justify-center mb-6">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 12v40M12 32h40M20 20l24 24M44 20L20 44" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                </svg>
            </div>
            {/* Heading */}
            <h2 className="relative z-10 text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
                For people going<br />
                beyond their limitations
            </h2>
            {/* Subheading */}
            <p className="relative z-10 text-center text-gray-500 max-w-xl mx-auto mb-8 text-lg">
                We create <span className="font-semibold text-gray-700">tools that augment</span>—not replace—<span className="font-semibold text-gray-700">human intelligence</span> with artificial intelligence to overcome the brain's limitations. Improving memory and focus are just the beginning.
            </p>
            {/* Button */}
            <button className="relative z-10 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium shadow hover:bg-gray-800 transition">
                Get started for free
            </button>
        </section>
    );
} 