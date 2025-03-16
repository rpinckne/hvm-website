"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function LimitedTimeOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 22,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const endDate = new Date(Date.now() + 22 * 60 * 60 * 1000) // 22 hours from now
    const timer = setInterval(() => {
      const now = new Date()
      const difference = endDate.getTime() - now.getTime()

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })

      if (difference < 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-12 sm:py-16 md:py-24 bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Membership Closing Soon
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl leading-7 sm:leading-8">
            HVM Elite is accepting new members for a limited time only. Don&apos;t miss your chance to join our exclusive
            community committed to real growth.
          </p>
          <div className="mt-8 sm:mt-10 flex justify-center">
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </motion.div>
          </div>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base">Time remaining until membership closes</p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="#"
              className="w-full sm:w-auto rounded-md bg-white px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-accent shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Join Now
            </Link>
            <Link href="#" className="text-sm sm:text-base font-semibold leading-6 text-white">
              Learn About Membership <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

