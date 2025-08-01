"use client"

import React from "react";
import { useEffect, useState } from "react"
import loadingScreenPicture from "../assets/loadingimage.png";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 80)

    // Complete after 4 seconds
    const timer = setTimeout(() => {
      setIsComplete(true)
      setTimeout(onComplete, 500) // Small delay for exit animation
    }, 4000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 bg-gray-50 flex flex-col items-center justify-center z-50 transition-all duration-500 ${
        isComplete ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      {/* Archive box illustration */}
      <div className="animate-pulse">
        <img src={loadingScreenPicture} alt="Archive box with files" className="w-100 h-100 object-contain" />
      </div>

   
      {/* Progress bar */}
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-400 to-teal-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>



      {/* Floating dots animation */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-200 rounded-full animate-bounce opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-200 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse opacity-50" />
    </div>
  )
}
