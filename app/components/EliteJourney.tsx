"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Dumbbell, Heart, Rocket } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Mind",
    description: "Sharpen focus and resilience",
    color: "bg-blue-500",
  },
  {
    icon: Dumbbell,
    title: "Body",
    description: "Build strength and vitality",
    color: "bg-green-500",
  },
  {
    icon: Heart,
    title: "Heart",
    description: "Cultivate emotional intelligence",
    color: "bg-red-500",
  },
  {
    icon: Rocket,
    title: "Hustle",
    description: "Drive career success",
    color: "bg-yellow-500",
  },
]

const journeySteps = [
  { title: "Join", description: "Become part of our community of high achievers" },
  { title: "Assess", description: "Complete a comprehensive personal assessment" },
  { title: "Plan", description: "Receive your customized growth plan" },
  { title: "Implement", description: "Execute your plan with community support" },
  { title: "Refine", description: "Track progress and adjust your approach" },
]

export default function EliteJourney() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Your Elite Transformation</h2>
          <p className="text-xl text-muted-foreground">Master the four pillars of high-value living</p>
        </motion.div>

        <div className="space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold mb-6">The Four Pillars</h3>
              <div className="grid grid-cols-2 gap-4">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg ${pillar.color} text-white`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <pillar.icon className="w-8 h-8 mb-2" />
                    <h4 className="font-semibold">{pillar.title}</h4>
                    <p className="text-sm mt-1">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full">
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold mb-6">The Process</h3>
              <div className="bg-card rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  {journeySteps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={`flex flex-col items-center cursor-pointer ${
                        activeStep === index ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setActiveStep(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                          activeStep === index
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-xs font-medium">{step.title}</span>
                    </motion.div>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-primary text-primary-foreground p-6 rounded-lg"
                  >
                    <h4 className="font-bold text-lg mb-2">{journeySteps[activeStep].title}</h4>
                    <p className="text-sm">{journeySteps[activeStep].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

