"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, CheckCircle, Users, FileText, Target } from "lucide-react"

const steps = [
  {
    icon: Users,
    title: "Join the Elite",
    description: "Become part of a community committed to excellence",
  },
  {
    icon: FileText,
    title: "Get Your Blueprint",
    description: "Receive a personalized plan tailored to your goals",
  },
  {
    icon: Target,
    title: "Transform",
    description: "Achieve elite-level growth across all areas of life",
  },
]

const features = [
  "Personalized monthly plans",
  "Expert coaching and support",
  "Focus on mind, body, heart, and hustle",
  "Adaptive strategies for continuous growth",
  "Access to exclusive resources and community",
]

export default function PersonalizedJourney() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Your Path to Greatness</h2>
          <p className="text-xl text-muted-foreground">Unlock your full potential with HVM Elite</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-center space-y-12 lg:space-y-0 lg:space-x-8">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-6">Your Journey Begins Here</h3>
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors ${
                      activeStep === index ? "bg-primary/10" : "hover:bg-primary/5"
                    }`}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`rounded-full p-2 mr-4 ${activeStep === index ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && <ChevronRight className="ml-auto text-muted-foreground" />}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-primary text-primary-foreground rounded-xl shadow-xl p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">Why HVM Elite?</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className="mt-8 w-full px-6 py-3 bg-background text-foreground rounded-full text-lg font-semibold hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Transformation
              </motion.button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-xl text-muted-foreground">
              {activeStep === 0 && "Join a community of high achievers and start your journey to greatness."}
              {activeStep === 1 && "Get a customized plan that adapts to your goals and progress."}
              {activeStep === 2 && "Achieve remarkable growth and become the best version of yourself."}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

