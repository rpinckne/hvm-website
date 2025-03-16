"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setShowScrollIndicator(false)
    } else {
      setShowScrollIndicator(true)
    }
  })

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative h-screen overflow-hidden bg-background">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5658056-hd_1920_1080_24fps-EMUgWMmEeW8M31cFuYFvzAqW32Xy7E.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-shadow font-heading"
            variants={itemVariants}
          >
            Become Him.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-shadow"
            variants={itemVariants}
          >
            Personalized, science-backed strategies for holistic growth.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="#"
              className="apple-button text-lg px-8 py-4 rounded-full bg-white text-accent hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg inline-block"
            >
              Start Your Transformation
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <path
              d="M20 5V35M20 35L35 20M20 35L5 20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </div>
  )
}

