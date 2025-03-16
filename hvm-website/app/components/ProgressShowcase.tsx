"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const progressStats = [
  { label: "Improved Confidence", value: 85, duration: 1.5 },
  { label: "Increased Productivity", value: 78, duration: 1.8 },
  { label: "Enhanced Physical Performance", value: 90, duration: 2.1 },
  { label: "Career Growth", value: 70, duration: 1.3 },
]

export default function ProgressShowcase() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div className="py-24 bg-background sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Proof in Progress</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Data-Driven Outcomes That Speak for Themselves
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our members are achieving tangible results with a personalized approach backed by science.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {progressStats.map((stat) => (
              <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  <motion.span
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 },
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}%
                  </motion.span>
                </dd>
                <motion.div
                  className="h-2 w-full bg-secondary rounded-full overflow-hidden"
                  initial="hidden"
                  animate={controls}
                  variants={{
                    visible: { width: "100%" },
                    hidden: { width: 0 },
                  }}
                  transition={{ duration: stat.duration, ease: "easeOut" }}
                >
                  <div className="h-full bg-accent" style={{ width: `${stat.value}%` }}></div>
                </motion.div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

