import React from "react";
import './Projects.css';

const projects = [
    {
        title: "Personalized Recommendations",
        description: "Select suggestions for special presents, making thoughtful and meaningful gift selections.",
        icon: "💖"
    },
    {
        title: "Seamless Integration",
        description: "Integrate with your favorite platforms and multiple gifting ecosystems.",
        icon: "⚡"
    },
    {
        title: "Dynamic Occasion Insights",
        description: "Smart reminders and ideas so you never miss an occasion and your gifts are on point.",
        icon: "🚀"
    },
    {
        title: "AI-Powered Efficiency",
        description: "Smart algorithms for quick and efficient gift suggestions, saving you time.",
        icon: "🎩"
    }
];

export default function Projects() {
    return (
        <section className="projects-section mb-20">
            <h2 className="projects-heading">
                Things I've <span className="gradient-text">Built</span>
            </h2>
            <div className="projects-layout">
                <div className="projects-main">

                </div>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div className="project-card" key={i}>
                            <div className="project-icon">{p.icon}</div>
                            <div className="project-title">{p.title}</div>
                            <div className="project-descdd">{p.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Foundation section merged below */}
            <div className="foundation-top-row mt-7">
                <div className="foundation-main-card">


                </div>
                <div className="foundation-image-card">

                </div>
            </div>
            <div className="foundation-bottom-row">
                <div className="foundation-card">

                </div>
                <div className="foundation-card">

                </div>
                <div className="foundation-card">

                </div>
            </div>
        </section>
    );
} 