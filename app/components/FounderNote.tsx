"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, Instagram, Linkedin, Twitter } from "lucide-react"

export default function FounderNote() {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => setIsExpanded(!isExpanded)

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-accent shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40"></div>
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
              <div className="w-full lg:w-2/3 text-white mb-12 lg:mb-0">
                <motion.h2
                  className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 font-heading leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Founder Note
                </motion.h2>
                <motion.div
                  className="space-y-6 text-lg sm:text-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="leading-relaxed">
                    Not long ago, I was overwhelmed by the noise of conflicting advice. I hit rock bottom and decided to
                    get back to basics.
                  </p>
                  <p className="leading-relaxed">
                    By focusing on disciplined learning, real habits, and genuine connections, I built viral consumer
                    apps, landed Forbes 30 Under 30, and forged an epic network of power players. Real success isn&apos;t
                    flashy—it comes from investing in yourself every single day.
                  </p>
                  <p className="leading-relaxed">
                    That&apos;s why we built HVM Elite: personalized, science‑backed guides to help you master the
                    fundamentals and unlock elite-level growth.
                  </p>
                </motion.div>
                <div className="mt-10 flex flex-col items-center sm:items-start">
                  <motion.div
                    className="flex flex-col items-center sm:flex-row sm:items-center sm:space-x-6 mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 sm:mb-0">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21F8DD2A-AC78-4F22-9173-14EA70453D5E%202.jpg-dQFM5Yeh9NB27dojpjaqb0czRtrwf0.jpeg"
                        alt="Bobby, Founder of HVM Elite"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex space-x-4">
                      {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                        <motion.a
                          key={index}
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-accent transition-colors p-2 rounded-full hover:bg-white"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon size={20} />
                          <span className="sr-only">{Icon.name}</span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                  <motion.button
                    onClick={toggleExpanded}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-expanded={isExpanded}
                    aria-controls="founder-story"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    {isExpanded ? "Got It" : "Read More"}
                    {isExpanded ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="founder-story"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-card rounded-3xl shadow-xl p-8 sm:p-12"
            >
              <div className="space-y-6 text-base sm:text-lg text-muted-foreground">
                <p>
                  I get it—wanting more but not knowing where to start can be overwhelming. At a low point in college, I
                  decided to cut through the noise and get back to basics. I dove into research—studying psychology,
                  business strategies, coding, and mindfulness—and applied those lessons with relentless discipline. In
                  just a few short months, everything changed. I built viral consumer apps like Discz Music, My Internet
                  Bedroom, Housewarming, and Verse—reaching millions, landing Forbes 30 Under 30, and raising tens of
                  millions from top venture capitalists.
                </p>
                <p>
                  Even more, I forged an epic network of power players, got into great shape, and developed some of the
                  deepest new friendships I&apos;d ever had—all by focusing on what truly matters instead of chasing empty
                  trends.
                </p>
                <p>
                  The lesson is simple: true success isn&apos;t about flashy flexes—it&apos;s about consistently investing in
                  yourself. That&apos;s why we created HVM Elite. Our platform delivers personalized, science‑backed guides
                  designed to help you build lasting success across mind, body, heart, and hustle. It&apos;s the blueprint
                  for transformation I wish I&apos;d had when I was starting out.
                </p>
                <p>
                  If you&apos;re ready to ditch the hype and start investing in your future (and have a little fun along the
                  way), welcome to HVM Elite. Let&apos;s build your legacy together.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

