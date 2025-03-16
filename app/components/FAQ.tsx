"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How is HVM Elite different from other self-improvement programs?",
    answer:
      "We deliver a personalized, science-backed plan covering Mind, Body, Heart, and Hustle. Unlike generic programs, our approach is tailored to your unique needs.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Our members see measurable improvements in confidence, productivity, fitness, and career success. Results vary, but progress is guaranteed when you commit.",
  },
  {
    question: "How do the personalized plans work?",
    answer:
      "Each month, you receive a customized roadmap based on in-depth assessments and proven strategies—like having a personal coach in your pocket.",
  },
  {
    question: "Is there support if I struggle?",
    answer:
      "Absolutely. Our community and expert mentors are here to guide you through every challenge—no judgment, just practical help.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="py-24 bg-background sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Questions?</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Everything you need to know about HVM Elite – clear, honest, and to the point.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-foreground">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-accent" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-accent" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 text-muted-foreground">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

