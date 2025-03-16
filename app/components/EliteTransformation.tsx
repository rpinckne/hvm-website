"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserPlus, FileText, MessageCircle, TrendingUp, Star } from "lucide-react"
import React from "react"

const processSteps = [
  {
    number: 1,
    title: "Join & Assess",
    description: "Become a member and complete our assessment to understand your starting point.",
    icon: UserPlus,
  },
  {
    number: 2,
    title: "Connect with Your Coach",
    description: "Get introduced to your supportive coach who will guide you and answer any questions you may have.",
    icon: MessageCircle,
  },
  {
    number: 3,
    title: "Receive Your Plan",
    description: "Your coach will email you a personalized monthly plan covering all four pillars of elite growth.",
    icon: FileText,
  },
  {
    number: 4,
    title: "Implement & Track",
    description: "Put your plan into action with ongoing support, and track your progress through regular check-ins.",
    icon: TrendingUp,
  },
  {
    number: 5,
    title: "Grow & Adapt",
    description: "Experience continuous growth with monthly plan updates tailored to your evolving needs and progress.",
    icon: Star,
  },
]

export default function EliteTransformation() {
  const [activeStep, setActiveStep] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-foreground font-heading leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Process
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          <motion.div className="lg:col-span-1" variants={containerVariants} initial="hidden" animate="visible">
            <ul className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center p-4 sm:p-6 rounded-lg cursor-pointer transition-all ${
                    activeStep === index
                      ? "bg-accent/20 text-foreground shadow-md"
                      : "bg-card hover:bg-accent/10 text-foreground"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground mr-4 font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>
                  <span className="font-semibold text-base sm:text-lg">{step.title}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-card p-6 sm:p-8 rounded-lg h-full flex flex-col justify-center shadow-lg border border-border"
              >
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="bg-accent p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    {React.createElement(processSteps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                </motion.div>
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground font-heading leading-snug"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {processSteps[activeStep].title}
                </motion.h3>
                <motion.p
                  className="text-lg sm:text-xl mb-6 sm:mb-8 text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {processSteps[activeStep].description}
                </motion.p>
                {activeStep < processSteps.length - 1 && (
                  <motion.button
                    className="mt-auto px-6 py-3 bg-accent text-accent-foreground rounded-full text-base sm:text-lg font-semibold hover:bg-accent/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveStep((prev) => prev + 1)}
                  >
                    Next Step
                  </motion.button>
                )}
                {activeStep === processSteps.length - 1 && (
                  <motion.button
                    className="mt-auto px-6 py-3 bg-accent text-accent-foreground rounded-full text-base sm:text-lg font-semibold hover:bg-accent/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Journey
                  </motion.button>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

