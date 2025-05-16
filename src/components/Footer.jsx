import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-clean-section">
            {/* Call-to-action section above the footer */}
            <section className="footer-cta-section mt-60">
                <div className="footer-cta-content">
                    <div className="footer-cta-text">
                        <h2>Let's bring the<br />future of health<br />to everyone.</h2>
                        <button className="footer-cta-btn">Schedule Your Demo</button>
                    </div>
                    <div className="footer-cta-image">
                        {/* Placeholder for image/graphic */}
                        <div className=""></div>
                    </div>
                </div>
            </section>
            <footer className="footer-section">

            </footer>
            <div className="footer-clean-content">
                {/* Left: Logo, brand, description, social icons */}
                <div className="footer-clean-brand">
                    <div className="footer-clean-logo">{/* Placeholder SVG logo */}
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#4F8CFF" /><path d="M12 18c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z" fill="#fff" /></svg>
                    </div>
                    <div className="footer-clean-title">Stay Clean</div>
                    <div className="footer-clean-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</div>
                    <div className="footer-clean-socials">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                {/* Right: Four columns */}
                <div className="footer-clean-links">
                    <div className="footer-clean-col">
                        <div className="footer-clean-col-title">Company</div>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Community</a>
                        <a href="#">Testimonial</a>
                    </div>
                    <div className="footer-clean-col">
                        <div className="footer-clean-col-title">Support</div>
                        <a href="#">Help Center</a>
                        <a href="#">Tweet @ Us</a>
                        <a href="#">Webinars</a>
                        <a href="#">Feedback</a>
                    </div>
                    <div className="footer-clean-col">
                        <div className="footer-clean-col-title">Links</div>
                        <a href="#">Courses</a>
                        <a href="#">Become Teacher</a>
                        <a href="#">Service</a>
                        <a href="#">All in One</a>
                    </div>
                    <div className="footer-clean-col">
                        <div className="footer-clean-col-title">Contact Us</div>
                        <div className="footer-clean-contact-row"><span className="footer-clean-contact-icon">📞</span> (913) 9765 4321 54</div>
                        <div className="footer-clean-contact-row"><span className="footer-clean-contact-icon">✉️</span> support@email.com</div>
                    </div>
                </div>
            </div>
            {/* Bottom bar */}
            <div className="footer-clean-bottom">
                <div className="footer-clean-copyright">© Copyright by CodeBUI. All rights reserved.</div>
                <div className="footer-clean-policies">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Legal</a>
                    <a href="#">Site Map</a>
                </div>
            </div>
        </footer>
    );
} 