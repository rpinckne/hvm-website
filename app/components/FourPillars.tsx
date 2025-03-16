"use client"

import { motion } from "framer-motion"
import { Brain, Dumbbell, Heart, Rocket } from "lucide-react"

const pillars = [
  {
    name: "Mind",
    description: "Sharpen your focus and mental resilience.",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    name: "Body",
    description: "Build strength, energy, and vitality.",
    icon: Dumbbell,
    color: "bg-green-500",
  },
  {
    name: "Heart",
    description: "Cultivate emotional intelligence and relationships.",
    icon: Heart,
    color: "bg-red-500",
  },
  {
    name: "Hustle",
    description: "Drive your career and financial success.",
    icon: Rocket,
    color: "bg-yellow-500",
  },
]

export default function FourPillars() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground">The Four Pillars of Elite Growth</h2>
          <p className="mt-4 text-xl text-muted-foreground">Holistic development for true transformation</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`absolute inset-0 ${pillar.color} opacity-75`} />
              <div className="relative p-6">
                <pillar.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{pillar.name}</h3>
                <p className="text-white">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

