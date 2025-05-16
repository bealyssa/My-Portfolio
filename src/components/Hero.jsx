import React from 'react';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/NearMe';
import ArrowBackIosNewIcon from '@mui/icons-material/NearMe';
import NorthEastIcon from '@mui/icons-material/NearMe';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
    return (
        <section className="relative overflow-hidden w-full min-h-[93vh] flex flex-col justify-center items-center text-center py-48">
            {/* Particles Container - positioned at the top of hero section */}
            <div className="absolute inset-x-0 top-0 h-[90vh] pointer-events-none">
                <ParticlesBackground
                    variant="hero"
                    className="absolute inset-0"
                />
            </div>
            {/* Hero grid background image */}
            <img
                src="../public/HeroGridBG.png"
                alt="Grid background"
                className="absolute left-0 w-full h-full object-cover z-100 pointer-events-none select-none"
                style={{ objectPosition: 'bottom', top: '43%', height: '57%', position: 'absolute', opacity: 0.4 }}
                aria-hidden="true"
            />
            <div className="container relative z-10 mx-auto px-4 mb-10 mt-[-50px]">
                {/* Animated cursor icons pointing at the hero text */}
                {/* Top Left - Diagonal Arrow */}
                <div className="absolute left-[25%] top-96 z-20 pointer-events-none select-none animate-cursor-diag">
                    <NorthEastIcon sx={{ fontSize: 50, color: '#D72378', filter: 'drop-shadow(0 0 12px #e879f9aa)', opacity: 0.85 }} />
                </div>
                {/* Top Right - Left Arrow (using ArrowBackIosNewIcon) */}
                <div className="absolute left-[5%] top-40 z-20 pointer-events-none select-none animate-cursor-left">
                    <ArrowBackIosNewIcon sx={{ fontSize: 35, color: 'url(#cursorGradient)', filter: 'drop-shadow(0 0 12px #a78bfaaa)', opacity: 0.85, transform: 'rotate(50deg)' }} />
                </div>
                {/* Bottom Left - Hand Pointer (now points to Let's Connect button) */}

                {/* Bottom Right - Right Arrow (existing) */}
                <div className="absolute right-[4%] bottom-[24%] z-20 pointer-events-none select-none animate-cursor-hand-to-btn">
                    <ArrowRightAltIcon sx={{ fontSize: 50, color: '#232439', filter: 'drop-shadow(0 0 12px #232439)', opacity: 0.85, transform: 'rotate(50deg)' }} />
                </div>
                {/* SVG Gradient Defs for Icon Colors */}
                <svg width="0" height="0">
                    <defs>
                        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a78bfa" />
                            <stop offset="50%" stopColor="#e879f9" />
                            <stop offset="100%" stopColor="#f472b6" />
                        </linearGradient>
                    </defs>
                </svg>
                <h1 className="text-6xl md:text-7xl font-bold mb-3 tracking-tight text-center mt-10">
                    <span className="text-white">Crafting Your Modern </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 bg-clip-text text-transparent"> Web Solutions.</span>
                </h1>
                <p className="text-gray-300 text-2xl mb-6">Frontend Developer</p>
                <div className="flex justify-center gap-4">
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            borderRadius: '999px',
                            px: 4,
                            py: 1.5,
                            fontSize: '0.875rem',
                            backgroundColor: 'transparent',
                            borderWidth: '1px',
                            textTransform: 'none',
                            transition: 'all 0.2s',
                            mr: 2,
                            '&:hover': {
                                backgroundColor: 'white',
                                color: 'black',
                                borderColor: 'white',
                            },
                        }}
                    >
                        Let's Connect
                    </Button>

                </div>
            </div>
            {/* Add animation keyframes for the cursor */}
            <style>
                {`
@keyframes cursor-diag {
  0%, 100% { transform: translateY(-10px) scale(1) rotate(-10deg); opacity: 0.7; }
  50% { transform: translateY(10px) scale(1.1) rotate(-10deg); opacity: 1; }
}
@keyframes cursor-left {
  0%, 100% { transform: translateX(0) scale(1) rotate(-20deg); opacity: 0.7; }
  50% { transform: translateX(-12px) scale(1.1) rotate(-20deg); opacity: 1; }
}
@keyframes cursor-hand-to-btn {
  0%, 100% { transform: translateY(0) scale(1) rotate(200deg); opacity: 0.7; }
  50% { transform: translateY(-18px) scale(1.1) rotate(200deg); opacity: 1; }
}
.animate-cursor-diag {
  animation: cursor-diag 1.7s infinite ease-in-out;
}
.animate-cursor-left {
  animation: cursor-left 1.5s infinite ease-in-out;
}
.animate-cursor-hand-to-btn {
  animation: cursor-hand-to-btn 1.8s infinite ease-in-out;
}
.animate-cursor-right {
  animation: cursor-right 1.6s infinite ease-in-out;
}
`}
            </style>
        </section>
    );
} 