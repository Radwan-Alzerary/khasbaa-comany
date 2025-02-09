"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { BackgroundShapes } from "./BackgroundShapes"

const partners = [
  { name: "شركة آسيا سيل", logo: "/placeholder.svg?height=100&width=200" },
  { name: "منظمة الحياة للإغاثة والتنمية", logo: "/placeholder.svg?height=100&width=200" },
  { name: "محافظة نينوى", logo: "/placeholder.svg?height=100&width=200" },
  { name: "المؤسسة العراقية للتنمية", logo: "/placeholder.svg?height=100&width=200" },
  { name: "شركة WHH الألمانية", logo: "/placeholder.svg?height=100&width=200" },
]

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length)
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [nextSlide])

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-16 overflow-hidden">
      <BackgroundShapes className="z-0" color="#93C5FD" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">شركاؤنا في النجاح</h2>
        <div className="relative h-80 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
              animate="visible"
              exit="exit"
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center max-w-md w-full">
                <Image
                  src={partners[currentIndex].logo || "/placeholder.svg"}
                  alt={partners[currentIndex].name}
                  width={200}
                  height={100}
                  className="mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{partners[currentIndex].name}</h3>
                <p className="text-gray-600 text-center">شريك موثوق في رحلة نجاحنا</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Previous partner"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Next partner"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                index === currentIndex ? "bg-blue-500 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

