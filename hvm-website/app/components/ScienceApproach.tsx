"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Lightbulb, TrendingUp, Users } from "lucide-react"

const features = [
  {
    name: "Customized Assessments",
    description: "Pinpoint your strengths and areas for improvement with our data-driven evaluation.",
    icon: ClipboardCheck,
  },
  {
    name: "Evidence-Based Techniques",
    description: "Leverage methods validated by leading research in psychology, fitness, and productivity.",
    icon: Lightbulb,
  },
  {
    name: "Proven Success Models",
    description: "Adapt strategies from top performers to accelerate your growth.",
    icon: TrendingUp,
  },
  {
    name: "Expert Mentorship",
    description: "Gain guidance from professionals who are as committed to your success as you are.",
    icon: Users,
  },
]

export default function ScienceApproach() {
  return (
    <div className="py-24 bg-background sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Science-Backed Transformation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real Science. Real Results.
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every strategy is built on proven research and expert insights—cutting through the hype to deliver
            measurable change.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                  <feature.icon className="h-5 w-5 flex-none text-accent" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

