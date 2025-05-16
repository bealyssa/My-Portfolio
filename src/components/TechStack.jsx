import React, { useState, useRef } from "react";
import './TechStack.css';

const techStack = [
    { name: "React", icon: "⚛️", details: "React is my go-to for building dynamic, high-performance UIs. I've crafted dashboards, landing pages, and full-scale apps using hooks, context, and component-driven design. I love making interfaces that feel alive and intuitive." },
    { name: "JavaScript", icon: "🟨", details: "JavaScript is the language I use to bring ideas to life. From vanilla JS to ESNext, I write clean, maintainable code and enjoy solving tricky problems, building everything from interactive widgets to robust APIs." },
    { name: "TypeScript", icon: "🟦", details: "TypeScript helps me write safer, more reliable code. I use it to catch bugs early, refactor with confidence, and scale projects with strong typing—especially in larger React and Node.js codebases." },
    { name: "HTML5", icon: "🟧", details: "HTML5 is the backbone of every web project I build. I focus on semantic markup, accessibility, and SEO best practices to ensure my sites are robust and user-friendly." },
    { name: "CSS3", icon: "🟦", details: "With CSS3 (and preprocessors like SCSS), I create responsive, visually engaging layouts. I'm skilled in Flexbox, Grid, animations, and theming, always aiming for pixel-perfect results." },
    { name: "Node.js", icon: "🟩", details: "I use Node.js to build fast, scalable backends and APIs. From RESTful services to real-time apps with WebSockets, I enjoy architecting solutions that are both efficient and maintainable." },
    { name: "Golang", icon: "��", details: "Golang is my choice for high-performance backend services. I appreciate its simplicity, concurrency model, and speed—perfect for building APIs, microservices, and CLI tools." },
    { name: "Vite", icon: "⚡", details: "Vite supercharges my development workflow. I use it for lightning-fast builds and hot module replacement, making frontend development with React and TypeScript a breeze." },
];

// Initial positions for each card (matching the CSS positions)
const initialPositions = [
    { x: 0, y: 0 },    // card-0
    { x: 210, y: -30 },// card-1
    { x: 420, y: 10 }, // card-2
    { x: -30, y: 170 },// card-3
    { x: 180, y: 200 },// card-4
    { x: 420, y: 180 },// card-5
    { x: 320, y: 90 }, // card-6
    { x: 90, y: 120 }, // card-7
];

export default function TechStack() {
    const [positions, setPositions] = useState(initialPositions);
    const [dragging, setDragging] = useState(null); // index of card being dragged
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [zOrders, setZOrders] = useState(Array(techStack.length).fill(0));
    const [openCard, setOpenCard] = useState(null); // index of open card
    const zCounter = useRef(1);

    const handleCardAction = (i) => {
        setOpenCard(prev => (prev === i ? prev : i));
    };

    const handleDragStart = (i, e) => {
        e.preventDefault();
        handleCardAction(i);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setDragging(i);
        setDragOffset({
            x: clientX - positions[i].x,
            y: clientY - positions[i].y,
        });
        // Bring this card to front
        setZOrders(zs => {
            const newZs = [...zs];
            newZs[i] = zCounter.current++;
            return newZs;
        });
    };

    const handleDrag = (e) => {
        if (dragging === null) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setPositions(pos => {
            const newPos = [...pos];
            newPos[dragging] = {
                x: clientX - dragOffset.x,
                y: clientY - dragOffset.y,
            };
            return newPos;
        });
    };

    const handleDragEnd = () => {
        setDragging(null);
    };

    React.useEffect(() => {
        if (dragging !== null) {
            window.addEventListener('mousemove', handleDrag);
            window.addEventListener('mouseup', handleDragEnd);
            window.addEventListener('touchmove', handleDrag, { passive: false });
            window.addEventListener('touchend', handleDragEnd);
        } else {
            window.removeEventListener('mousemove', handleDrag);
            window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchmove', handleDrag);
            window.removeEventListener('touchend', handleDragEnd);
        }
        return () => {
            window.removeEventListener('mousemove', handleDrag);
            window.removeEventListener('mouseup', handleDragEnd);
            window.removeEventListener('touchmove', handleDrag);
            window.removeEventListener('touchend', handleDragEnd);
        };
    }, [dragging]);

    return (
        <section className="techstack-float-section mt-32">
            <h2 className="techstack-heading">
                My <span className="gradient-text">Tech Stack</span>
            </h2>
            <div className="techstack-instruction professional-ui ml-12">🖱️ Click and drag the cards</div>
            <div className="techstack-float-container">
                {techStack.map((tech, i) => (
                    <div
                        className={`techstack-float-card techstack-card-${i}`}
                        key={i}
                        style={{
                            left: positions[i].x,
                            top: positions[i].y,
                            zIndex: zOrders[i],
                            cursor: dragging === i ? 'grabbing' : 'grab',
                            transition: dragging === i ? 'none' : 'box-shadow 0.2s, transform 0.2s',
                        }}
                        onMouseDown={e => handleDragStart(i, e)}
                        onTouchStart={e => handleDragStart(i, e)}
                        onClick={() => handleCardAction(i)}
                    >
                        <div className="techstack-icon">{tech.icon}</div>
                        <div className="techstack-name">{tech.name}</div>
                        <div className={`fortune-slip${openCard === i ? ' open' : ''}`}>
                            <div className="techstack-details">{tech.details}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 