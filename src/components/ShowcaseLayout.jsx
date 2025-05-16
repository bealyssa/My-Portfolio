import React from "react";
import "./ShowcaseLayout.css";

export default function ShowcaseLayout() {
    return (
        <section className="showcase-section">
            <h2 className="showcase-heading ">
                <span style={{ color: 'black' }}>What I Do</span> <span className="gradient-text">Best</span>
            </h2>
            <div className="showcase-layout">
                {/* Top Row */}
                <div className="row top-row">
                    <div className="container large left-top"></div>
                    <div className="container square right-top"></div>
                </div>
                {/* Middle Row */}
                <div className="row middle-row">
                    <div className="container large1 left-middle"></div>
                    <div className="container square1 right-middle"></div>
                </div>
                {/* Bottom Row */}
                <div className="row bottom-row">
                    <div className="container wide left-bottom"></div>
                    <div className="container square right-bottom"></div>
                </div>
            </div>
        </section>
    );
} 