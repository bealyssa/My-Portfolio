import React, { useState } from "react";

const categories = [
    "All",
    "General",
    "Services",
    "Process",
    "Portfolio & Experience",
    "Contact & Collaboration",
];

const faqs = [
    {
        question: "What types of services do you offer?",
        answer: "We offer a wide range of services including web development, UI/UX design, digital marketing, and more.",
        category: "Services",
    },
    {
        question: "Do you offer marketing services for startups?",
        answer: "Yes, our marketing team can help define your value proposition, build your brand, and create strategies to reach your target audience effectively.",
        category: "Services",
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Absolutely! We provide ongoing support and maintenance after your product goes live.",
        category: "Services",
    },
    {
        question: "Can you design a custom platform for my business?",
        answer: "Yes, we specialize in building custom platforms tailored to your business needs.",
        category: "Process",
    },
    {
        question: "Do you provide ongoing support after the product launch?",
        answer: "Yes, we offer various support packages to ensure your product runs smoothly post-launch.",
        category: "Services",
    },
    {
        question: "Can you help with Generative AI for my business?",
        answer: "We have expertise in implementing Generative AI solutions for various business applications.",
        category: "General",
    },
    {
        question: "Do you work with startups in specific industries?",
        answer: "We work with startups across a wide range of industries, adapting our approach to each unique sector.",
        category: "Portfolio & Experience",
    },
    {
        question: "What tools and technologies do you use for product development?",
        answer: "We use the latest tools and technologies including React, Node.js, Python, and more.",
        category: "Process",
    },
    {
        question: "Do you provide maintenance services for digital products?",
        answer: "Yes, we offer maintenance services to keep your digital products up-to-date and secure.",
        category: "Services",
    },
    {
        question: "Can you help with cloud migration for my existing system?",
        answer: "Yes, we provide cloud migration services to help you move your existing systems to the cloud efficiently.",
        category: "Contact & Collaboration",
    },
];

export default function Faqs() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [openIndex, setOpenIndex] = useState(null);
    const [search, setSearch] = useState("");

    const filteredFaqs = faqs.filter(faq =>
        (selectedCategory === "All" || faq.category === selectedCategory) &&
        (faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase()))
    );

    return (
        <section className="relative min-h-screen bg-white py-16 px-4 mt-36 mb-36 flex flex-col items-center animate-fade-in overflow-hidden">
            {/* Left SVG Patterns */}
            <div className="hidden lg:block absolute left-0 top-0 h-full w-1/3 z-0 pointer-events-none">
                {/* Dots Pattern */}
                <svg width="100%" height="100%" className="opacity-10 absolute top-0 left-0" style={{ minHeight: '600px' }}>
                    <defs>
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="#60A5FA" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
                {/* Grid Pattern */}
                <svg width="100%" height="100%" className="opacity-5 absolute top-0 left-0" style={{ minHeight: '600px' }}>
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Diagonal Lines Pattern */}
                <svg width="100%" height="100%" className="opacity-5 absolute top-0 left-0" style={{ minHeight: '600px' }}>
                    <defs>
                        <pattern id="diagonal" width="30" height="30" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="0" y2="30" stroke="#60A5FA" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonal)" />
                </svg>
            </div>
            {/* Right SVG Patterns */}
            <div className="hidden lg:block absolute right-0 top-0 h-full w-1/3 z-0 pointer-events-none">
                {/* Dots Pattern */}
                <svg width="100%" height="100%" className="opacity-10 absolute top-0 right-0" style={{ minHeight: '600px' }}>
                    <defs>
                        <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="#60A5FA" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots2)" />
                </svg>
                {/* Grid Pattern */}
                <svg width="100%" height="100%" className="opacity-5 absolute top-0 right-0" style={{ minHeight: '600px' }}>
                    <defs>
                        <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid2)" />
                </svg>
                {/* Diagonal Lines Pattern */}
                <svg width="100%" height="100%" className="opacity-5 absolute top-0 right-0" style={{ minHeight: '600px' }}>
                    <defs>
                        <pattern id="diagonal2" width="30" height="30" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="0" x2="0" y2="30" stroke="#60A5FA" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonal2)" />
                </svg>
            </div>
            {/* Animated Circles (Bubbles) */}
            <div className="hidden lg:block absolute left-10 top-32 z-0 pointer-events-none">
                <span className="block w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-float-slow" />
            </div>
            <div className="hidden lg:block absolute right-16 top-1/2 z-0 pointer-events-none">
                <span className="block w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float-medium" />
            </div>
            <div className="hidden lg:block absolute left-1/3 bottom-10 z-0 pointer-events-none">
                <span className="block w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-float-fast" />
            </div>
            {/* More bubbles for a lively effect */}
            <div className="hidden lg:block absolute left-24 top-1/4 z-0 pointer-events-none">
                <span className="block w-12 h-12 bg-blue-300 rounded-full opacity-15 animate-float-medium" />
            </div>
            <div className="hidden lg:block absolute right-32 bottom-24 z-0 pointer-events-none">
                <span className="block w-28 h-28 bg-blue-100 rounded-full opacity-10 animate-float-slow" />
            </div>
            <div className="hidden lg:block absolute left-1/4 top-1/2 z-0 pointer-events-none">
                <span className="block w-10 h-10 bg-blue-400 rounded-full opacity-10 animate-float-fast" />
            </div>
            <div className="hidden lg:block absolute right-1/4 top-24 z-0 pointer-events-none">
                <span className="block w-16 h-16 bg-blue-200 rounded-full opacity-15 animate-float-medium" />
            </div>
            {/* FAQ Card */}
            <div className="relative max-w-3xl w-full rounded-3xl shadow-xl bg-white p-8 md:p-12 border border-gray-100 z-10">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">FAQs</h2>
                    <p className="text-gray-500 mb-6">Explore inspiring thought leadership publications about business and technology.</p>
                    <div className="flex items-center justify-center mb-6 relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:border-blue-500 shadow-sm transition"
                        />
                        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mb-8">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition border shadow-sm ${selectedCategory === cat ? "bg-blue-600 text-white border-blue-600 shadow-md" : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="divide-y divide-gray-200">
                    {filteredFaqs.length === 0 && (
                        <div className="text-gray-400 text-center py-8">No FAQs found.</div>
                    )}
                    {filteredFaqs.map((faq, idx) => (
                        <div key={idx} className={
                            `transition-all duration-300 ${openIndex === idx ? "bg-blue-50/60" : "bg-transparent"}`
                        }>
                            <button
                                className="w-full text-left flex items-center justify-between py-5 focus:outline-none group"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className={`text-base font-medium transition-colors ${openIndex === idx ? "text-blue-600" : "text-gray-900"}`}>{faq.question}</span>
                                <span className={`ml-4 transition-transform duration-300 ${openIndex === idx ? "rotate-90" : "rotate-0"}`}>
                                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                                style={{}}
                            >
                                <div className="text-gray-600 pb-5 pl-2 pr-4 text-sm">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Tailwind keyframes for floating animation */}
            <style>{`
                @keyframes float-slow { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
                @keyframes float-medium { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
                @keyframes float-fast { 0% { transform: translateY(0); } 50% { transform: translateY(-40px); } 100% { transform: translateY(0); } }
                .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
                .animate-float-medium { animation: float-medium 5s ease-in-out infinite; }
                .animate-float-fast { animation: float-fast 3.5s ease-in-out infinite; }
            `}</style>
        </section>
    );
}