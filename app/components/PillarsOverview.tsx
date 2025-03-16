"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Brain, Dumbbell, Heart, Rocket } from "lucide-react"

const pillars = [
  {
    icon: Brain,
    title: "Mind",
    description: "Sharpen focus & resilience",
  },
  {
    icon: Dumbbell,
    title: "Body",
    description: "Build strength & vitality",
  },
  {
    icon: Heart,
    title: "Heart",
    description: "Master emotional intelligence",
  },
  {
    icon: Rocket,
    title: "Hustle",
    description: "Accelerate career success",
  },
]

export default function PillarsOverview() {
  const [activePillar, setActivePillar] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-foreground font-heading leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Four Pillars
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`bg-card rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border hover:border-accent flex flex-col items-center text-center cursor-pointer ${
                index === activePillar ? "ring-2 ring-accent" : ""
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePillar(index)}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {<pillar.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent-foreground" />}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground font-heading leading-snug">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed hidden sm:block">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 p-4 bg-card rounded-lg shadow-lg sm:hidden"
          >
            <h4 className="text-lg font-semibold mb-2 text-foreground">{pillars[activePillar].title}</h4>
            <p className="text-sm text-muted-foreground">{pillars[activePillar].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

