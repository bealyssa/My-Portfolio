import React from "react";
import './Testimonials.css';

const testimonials = [
    {
        name: "Tina Turner",
        subtitle: "Co-founder of Marketing Agency",
        text: "Highly recommend the SEO keyword generator tool for anyone looking to enhance their digital marketing strategy.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Jane Smith",
        subtitle: "Content Strategist",
        text: "This tool is a game changer for content planning!",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        name: "Alex Brown",
        subtitle: "SEO Specialist",
        text: "If you're in a crunch, use this tool! It's so easy and effective.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Chris Lee",
        subtitle: "Digital Marketer",
        text: "Using this SEO keyword generator, our website traffic has increased by 40%!",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    {
        name: "Sam Green",
        subtitle: "Marketing Lead",
        text: "Our team loves how intuitive and fast this tool is!",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        name: "Pat Taylor",
        subtitle: "Growth Manager",
        text: "The best investment for our marketing department!",
        avatar: "https://randomuser.me/api/portraits/women/47.jpg"
    }
];

export default function Testimonials() {
    return (
        <div className="testimonials-section">
            {/* Clutch badge on the left */}
            <div className="testimonials-center-wrapper">
                <div className="testimonials-center">
                    <div className="people-saying-label">—&nbsp;&nbsp;&nbsp;people saying</div>
                    <h2>Our Clients are proud of us!</h2>
                    <p className="subtitle">Office partners who trust to make their work and money go from downtime to constant process.</p>
                </div>
            </div>
            {/* Floating cards and avatars */}
            <div className="testimonials-floating">
                {testimonials.map((t, i) => (
                    <div className={`testimonial-card card-${i}`} key={i}>
                        <div className="testimonial-text">{t.text}</div>
                        <div className="testimonial-user-row">
                            <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                            <div>
                                <div className="testimonial-name">{t.name}</div>
                                <div className="testimonial-subtitle">{t.subtitle}</div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Avatar containers for floating images */}
                <div className="testimonial-avatar-container avatar-pos-0"></div>
                <div className="testimonial-avatar-container avatar-pos-1"></div>
                <div className="testimonial-avatar-container avatar-pos-2"></div>
                <span className="icon-thumb" role="img" aria-label="thumbs up">👍</span>
                <span className="icon-heart" role="img" aria-label="heart">❤️</span>
                <span className="icon-hand" role="img" aria-label="hand">✋</span>
                <span className="icon-heart-purple" role="img" aria-label="purple heart">💜</span>
            </div>
        </div>
    );
} 