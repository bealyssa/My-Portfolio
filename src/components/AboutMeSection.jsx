import React, { useState } from "react";

const images = [
    {
        src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&q=80",
        alt: "about-1",
    },
    {
        src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80",
        alt: "about-2",
    },
    {
        src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
        alt: "about-3",
    },
];

export default function AboutMeSection() {
    const [centerIndex, setCenterIndex] = useState(1); // Start with the second image as center

    const handleNext = () => {
        setCenterIndex((prev) => (prev + 1) % images.length);
    };

    // Calculate position for each card
    const getCardStyle = (idx) => {
        const pos = (idx - centerIndex + images.length) % images.length;
        // pos: 0 = left, 1 = center, 2 = right
        if (pos === 0) {
            return "z-0" +
                " absolute left-1/2 top-6 w-40 h-52 -translate-x-[120%] rotate-[-12deg] shadow-xl transition-all duration-500";
        } else if (pos === 1) {
            return "z-10" +
                " absolute left-1/2 top-0 w-44 h-56 -translate-x-1/2 rotate-0 shadow-2xl transition-all duration-500";
        } else {
            return "z-0" +
                " absolute left-1/2 top-6 w-40 h-52 translate-x-[35%] rotate-[12deg] shadow-xl transition-all duration-500";
        }
    };

    return (
        <section className="flex flex-col items-center justify-center mb-32 py-24 bg-white">
            {/* Overlapping image cards as carousel */}
            <div className="relative flex items-center justify-center mb-8 h-56 w-[420px] md:w-[520px]">
                {images.map((img, idx) => (
                    <img
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        className={
                            getCardStyle(idx) +
                            " object-cover rounded-2xl border-8 border-white"
                        }
                        style={{
                            transitionProperty: 'transform, box-shadow',
                        }}
                    />
                ))}
            </div>
            {/* Code-style label */}
            <div className="mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded font-mono text-xs tracking-widest shadow-sm">HT-DHJ-GW-001</span>
            </div>
            {/* Headline and subheadline */}
            <div className="text-center mb-8">
                <div className="text-gray-900 font-semibold text-lg md:text-xl mb-1">
                    Engineered for unpredictable spring days,
                </div>
                <div className="text-gray-400 text-base md:text-lg max-w-md mx-auto">
                    this lightweight down jacket delivers just the right amount of warmth without overheating.
                </div>
            </div>
            {/* Next Button */}
            <button onClick={handleNext} className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium shadow hover:bg-gray-800 transition">
                Next
            </button>
        </section>
    );
} 