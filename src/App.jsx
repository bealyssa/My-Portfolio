import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Apply from './components/Apply';
import Chatbot from './components/Chatbot';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import ShowcaseLayout from './components/ShowcaseLayout';
import Faqs from './components/Faqs';
import LimitationsSection from './components/LimitationsSection';
import ConnectionsSection from './components/ConnectionsSection';
import HeroSection from './components/HeroSection';
import AboutMeSection from './components/AboutMeSection';

export default function App() {
  return (
    <div className="">
      <HeroSection />
      <LimitationsSection />
      <AboutMeSection />
      <Projects />
      <ShowcaseLayout />
      <TechStack />
      <Testimonials />
      <Faqs />
      <Footer />
      <Chatbot />
      {/* <Header />
      <Hero />
      <Features />
      <Apply />
      <Chatbot /> */}
    </div>
  );
}
