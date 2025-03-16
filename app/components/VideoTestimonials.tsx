"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "John D.",
    title: "Entrepreneur",
    video: "/placeholder-video.mp4",
    quote: "HVM Elite pushed me to become the best version of myself.",
  },
  {
    id: 2,
    name: "Michael S.",
    title: "Tech Executive",
    video: "/placeholder-video.mp4",
    quote: "The personalized approach made all the difference in my career growth.",
  },
  {
    id: 3,
    name: "David L.",
    title: "Fitness Enthusiast",
    video: "/placeholder-video.mp4",
    quote: "I've never felt more confident and energized. HVM Elite transformed my life.",
  },
]

export default function VideoTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-background sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Hear It Firsthand</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real Voices, Real Success
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Listen to our members share how HVM Elite changed their lives—no hype, just genuine progress.
          </p>
        </div>
        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <video
                className="w-full max-w-2xl rounded-lg shadow-lg mb-8"
                controls
                poster="/placeholder.svg?height=400&width=600"
              >
                <source src={testimonials[currentTestimonial].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <blockquote className="text-xl font-semibold text-foreground mb-4">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <p className="text-lg text-muted-foreground">
                {testimonials[currentTestimonial].name} - {testimonials[currentTestimonial].title}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Watch {testimonials[currentTestimonial].name}'s 45-second testimonial
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full shadow-lg"
            onClick={prevTestimonial}
          >
            ←
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full shadow-lg"
            onClick={nextTestimonial}
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

