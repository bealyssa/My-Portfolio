import React, { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesBackground = ({ variant = 'default', className = '' }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesConfig = {
        hero: {
            fullScreen: { enable: false },
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#ffffff", "#a78bfa", "#e879f9", "#f472b6"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 0.6,
                    random: true,
                    animation: {
                        enable: true,
                        speed: 0.8,
                        minimumValue: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.5,
                        sync: false
                    }
                },
                move: {
                    enable: true,
                    speed: 0.3,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "bounce"
                    }
                },
                twinkle: {
                    particles: {
                        enable: true,
                        frequency: 0.05,
                        opacity: 1
                    }
                }
            },
            background: {
                color: "transparent"
            },
            detectRetina: true
        },
        // Add more variants here for other sections
    };

    return (
        <Particles
            id={`tsparticles-${variant}`}
            init={particlesInit}
            options={particlesConfig[variant] || particlesConfig.hero}
            className={className}
        />
    );
};

export default ParticlesBackground; 