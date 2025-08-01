"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, ArrowRight, Coffee, Code2 } from "lucide-react"

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=400&q=80",
    alt: "web stuff",
    label: "web dev",
    color: "bg-blue-50",
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
    alt: "design things",
    label: "design",
    color: "bg-purple-50",
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=400&q=80",
    alt: "mobile apps",
    label: "mobile",
    color: "bg-green-50",
  },
]

export default function AboutMeSection() {
  const [centerIndex, setCenterIndex] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % portfolioImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleNext = () => {
    setCenterIndex((prev) => (prev + 1) % portfolioImages.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const getCardStyle = (idx) => {
    const pos = (idx - centerIndex + portfolioImages.length) % portfolioImages.length

    if (pos === 0) {
      return "z-0 absolute left-1/2 top-6 w-32 h-40 -translate-x-[115%] rotate-[-12deg] transition-all duration-700 opacity-40 hover:opacity-70 hover:scale-105"
    } else if (pos === 1) {
      return "z-10 absolute left-1/2 top-0 w-40 h-48 -translate-x-1/2 rotate-0 transition-all duration-700 hover:scale-105 shadow-xl"
    } else {
      return "z-0 absolute left-1/2 top-6 w-32 h-40 translate-x-[30%] rotate-[12deg] transition-all duration-700 opacity-40 hover:opacity-70 hover:scale-105"
    }
  }

  return (
    <section
      className={`relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-white via-gray-50/30 to-white px-6 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Subtle floating elements */}
      <div
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-100/20 to-purple-100/20 blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x * 0.02 + "px",
          top: mousePosition.y * 0.02 + "px",
        }}
      />
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-100/10 to-blue-100/10 blur-3xl transition-all duration-1000 ease-out"
        style={{
          right: mousePosition.x * -0.01 + "px",
          bottom: mousePosition.y * -0.01 + "px",
        }}
      />

      {/* Enhanced carousel */}
      <div className="relative flex items-center justify-center mb-20 h-48 w-full max-w-md">
        {portfolioImages.map((img, idx) => (
          <div key={img.src} className={getCardStyle(idx)} onClick={() => setCenterIndex(idx)}>
            <div className={`absolute inset-0 ${img.color} rounded-xl opacity-20`} />
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="w-full h-full object-cover rounded-xl cursor-pointer border border-white/50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl" />
          </div>
        ))}

        {/* Carousel dots */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {portfolioImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCenterIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === centerIndex ? "bg-gray-800 w-6" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Enhanced main content */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4 font-mono">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          currently building cool stuff
        </div>

        <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-relaxed">
          hi i'm{" "}
          <span className="font-medium bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            alex
          </span>
        </h1>

        <p className="text-gray-600 text-xl leading-relaxed mb-8 max-w-lg mx-auto">
          i make websites and apps that don't suck. currently obsessed with clean code and good coffee.
        </p>

        {/* Enhanced status */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100 shadow-sm">
          <Code2 className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-600">working on</span>
          <span className="text-sm font-medium text-gray-900">{portfolioImages[centerIndex].label}</span>
          <Coffee className="w-4 h-4 text-amber-500" />
        </div>
      </div>

  
    

    </section>
  )
}
