"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ClipboardCheck, Brain, Dumbbell, Heart, Rocket } from "lucide-react"

const steps = [
  { icon: ClipboardCheck, title: "Assessment", description: "Complete our comprehensive questionnaire" },
  { icon: Brain, title: "Analysis", description: "AI-powered analysis of your unique needs" },
  { icon: Dumbbell, title: "Plan Creation", description: "Customized strategy across all four pillars" },
  { icon: Heart, title: "Implementation", description: "Guided execution with ongoing support" },
  { icon: Rocket, title: "Progress Tracking", description: "Regular check-ins and plan adjustments" },
]

export default function PersonalizedPlan() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">Your Personalized Journey</h2>
          <p className="mt-4 text-xl text-muted-foreground">How we craft your unique path to success</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
            >
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <AnimatePresence>
                {hoveredStep === index && (
                  <motion.div
                    className="absolute top-full mt-2 p-4 bg-background rounded-lg shadow-lg w-48"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

