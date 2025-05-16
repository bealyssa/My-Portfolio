import React from "react";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-full bg-white">
            {/* Profile area */}
            <div className="flex flex-col items-center mb-6">
                <div className="flex items-center space-x-2 mb-1">
                    {/* Placeholder avatar */}
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-8 h-8 rounded-full border-2 border-white shadow" />
                    {/* Placeholder icons */}
                    <span className="flex space-x-1">
                        <span className="inline-block w-5 h-5 bg-pink-200 rounded-full" />
                        <span className="inline-block w-5 h-5 bg-yellow-200 rounded-full" />
                        <span className="inline-block w-5 h-5 bg-blue-200 rounded-full" />
                    </span>
                </div>
                <div className="text-sm font-semibold text-gray-800">Matthias Flatter's Profile</div>
                <div className="text-xs text-gray-400">16 unorganised tabs</div>
            </div>
            {/* Headline */}
            <h1 className="text-center text-4xl md:text-6xl font-serif text-gray-400 font-light leading-tight">
                Lost in your Chrome tabs?
            </h1>
            <h2 className="text-center text-3xl md:text-5xl font-serif italic font-bold text-gray-900 mt-2 mb-4">
                we make them organized
            </h2>
            {/* Description */}
            <p className="text-center text-gray-400 max-w-xl mx-auto mb-6 text-sm md:text-base">
                Office ipsum you must be muted. Just solutionize problem encourage spaces. We launch elephant pulling strategies lift comms devil parking. Stands after managing buy-in then.
            </p>
            {/* Buttons */}
            <div className="flex items-center justify-center space-x-3 mb-6">
                <button className="px-6 py-2 bg-black text-white rounded-lg font-medium shadow hover:bg-gray-800 transition">
                    Start free trial
                </button>
                <button className="px-6 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium border border-gray-200 hover:bg-gray-200 transition">
                    Demo
                </button>
            </div>
            {/* Avatars row and joined count */}
            <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="avatar1" className="w-7 h-7 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/women/34.jpg" alt="avatar2" className="w-7 h-7 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="avatar3" className="w-7 h-7 rounded-full border-2 border-white" />
                    <img src="https://randomuser.me/api/portraits/women/36.jpg" alt="avatar4" className="w-7 h-7 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm text-gray-400">1,632 joined today</span>
            </div>
        </section>
    );
} 