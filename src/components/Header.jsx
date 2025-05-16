import React, { useState } from 'react';

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <header className="container mx-auto px-2 py-2 flex justify-center items-center sticky top-10 z-50 relative">
            <div
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer transition-opacity duration-200 ${modalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                style={{
                    background: "#0B0411",
                    borderRadius: "10px",
                    border: "1px solid rgba(255, 255, 255, 0.18)"
                }}
                onClick={() => setModalOpen((open) => !open)}
            >
                {/* Avatar */}
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <span className="text-xl">🧑‍🦰</span>
                </div>
                {/* Name */}
                <span className="text-base font-medium">Bea</span>
                {/* Hamburger menu icon */}
                <svg
                    className="ml-1"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect x="4" y="6" width="16" height="2" rx="1" fill="white" />
                    <rect x="4" y="11" width="16" height="2" rx="1" fill="white" />
                    <rect x="4" y="16" width="16" height="2" rx="1" fill="white" />
                </svg>
            </div>
            {modalOpen && (
                <>
                    {/* Invisible overlay to close dropdown on outside click */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setModalOpen(false)}
                        style={{ background: 'transparent' }}
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[-60px] z-50">
                        <div className="bg-[#0B0411] rounded-3xl shadow-2xl p-8 w-[490px] max-w-full flex flex-col items-center border border-white/10 transition-all duration-300 ease-out transform scale-100 opacity-100 animate-dropdown-fade-in">
                            {/* Avatar and Name */}
                            <div className="flex flex-row items-center mb-2">
                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-4xl mb-1">🧑‍🦰</div>
                                <div className="text-2xl ml-3 font-semibold text-white">Bea</div>
                            </div>
                            {/* Return Home Button */}
                            <button className="w-full mb-3 py-3 rounded-xl bg-[#0B0411] hover:bg-[#23243a]/80 text-white font-medium transition text-center text-base tracking-wide border border-white/10">RETURN HOME</button>
                            {/* 3x2 Grid of Buttons */}
                            <div className="grid grid-cols-3 gap-2 w-full">
                                <button className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0411] hover:bg-[#23243a]/80 p-4 shadow-inner border border-white/10">
                                    <span className="text-2xl mb-1">👤</span>
                                    <span className="text-xs text-white">ABOUT ME</span>
                                </button>
                                <button className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0411] hover:bg-[#23243a]/80 p-4 shadow-inner border border-white/10">
                                    <span className="text-2xl mb-1">📁</span>
                                    <span className="text-xs text-white">PROJECTS</span>
                                </button>
                                <button className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0411] hover:bg-[#23243a]/80 p-4 shadow-inner border border-white/10">
                                    <span className="text-2xl mb-1">📚</span>
                                    <span className="text-xs text-white">LIBRARY</span>
                                </button>
                                <button className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0411] hover:bg-[#23243a]/80 p-4 shadow-inner border border-white/10">
                                    <span className="text-2xl mb-1">🅿️</span>
                                    <span className="text-xs text-white">PIXELWRLD</span>
                                </button>
                                <button className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0411] hover:bg-[#23243a]/80 p-4 shadow-inner border border-white/10">
                                    <span className="text-2xl mb-1">💬</span>
                                    <span className="text-xs text-white">CONTACT</span>
                                </button>
                                <button className="flex flex-col items-center justify-center rounded-2xl bg-[#0B0411] hover:bg-[#23243a]/80 p-4 shadow-inner border border-white/10">
                                    <span className="text-2xl mb-1">🐦</span>
                                    <span className="text-xs text-white">TWITTER</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
} 