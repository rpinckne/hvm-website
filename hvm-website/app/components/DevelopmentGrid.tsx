"use client"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

const outcomes = [
  "Improved Confidence",
  "Physical Fitness",
  "Better Communication",
  "Financial Literacy",
  "Mental Resilience",
  "Increased Motivation",
  "Enhanced Focus",
  "Consistent Discipline",
  "Leadership Skills",
  "Social Competence",
  "Skill Development",
  "Growth Mindset",
  "Strength Training",
  "Self-Control",
  "Professional Presence",
  "Career Advancement",
  "Willpower Building",
  "Networking Skills",
  "Calculated Risk-Taking",
  "Energy Management",
  "Decision Making",
  "Productivity Habits",
  "Stress Management",
  "Personal Influence",
  "Life Balance",
]

const Outcome = ({ text }: { text: string }) => (
  <motion.div
    className="bg-accent/90 backdrop-blur-sm text-accent-foreground p-3 rounded-md text-center text-sm sm:text-base font-semibold flex items-center justify-center whitespace-nowrap overflow-hidden shadow-md"
    style={{ width: "220px", height: "50px", margin: "0 8px" }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 },
    }}
  >
    <span>{text}</span>
  </motion.div>
)

const MovingRow = ({ items }: { items: string[] }) => {
  const controls = useAnimation()
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animate = async () => {
      if (rowRef.current) {
        const rowWidth = rowRef.current.offsetWidth
        await controls.start({
          x: -rowWidth / 2,
          transition: {
            duration: 60,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          },
        })
      }
    }
    animate()
  }, [controls])

  return (
    <div className="flex overflow-hidden py-2">
      <motion.div ref={rowRef} className="flex" animate={controls}>
        {items.concat(items).map((item, index) => (
          <Outcome key={`${item}-${index}`} text={item} />
        ))}
      </motion.div>
    </div>
  )
}

export default function DevelopmentGrid() {
  const firstRow = outcomes.slice(0, Math.ceil(outcomes.length / 2))
  const secondRow = outcomes.slice(Math.ceil(outcomes.length / 2))

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground font-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Real Results Our Members Achieve
        </motion.h2>
        <div className="space-y-6">
          <MovingRow items={firstRow} />
          <MovingRow items={secondRow} />
        </div>
      </div>
    </section>
  )
}

