"use client"

import { Check, X, Brain, Dumbbell, Zap, Users, DollarSign, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "Personalization",
    hvmElite: "Customized plans for your goals",
    others: "One-size-fits-all advice",
    icon: Zap,
  },
  {
    name: "Approach",
    hvmElite: "Balanced: Mind, Body, Heart, Hustle",
    others: "Limited focus areas",
    icon: Brain,
  },
  {
    name: "Methods",
    hvmElite: "Research-based, proven results",
    others: "Hype-driven, unproven",
    icon: Dumbbell,
  },
  {
    name: "Community",
    hvmElite: "Interactive, ongoing guidance",
    others: "Impersonal, generic",
    icon: Users,
  },
  {
    name: "Pricing",
    hvmElite: "Affordable: ~$29/month",
    others: "High costs or fragmented",
    icon: DollarSign,
  },
  {
    name: "Communication",
    hvmElite: "Genuine, no-BS",
    others: "Flashy, often toxic",
    icon: MessageCircle,
  },
]

export default function ComparisonTable() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            HVM Elite vs. Others
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground">
            See how we stand out from generic programs.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 flow-root">
          <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-foreground sm:pl-0"
                    >
                      Feature
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                      HVM Elite
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                      Others
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature, index) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-foreground sm:pl-0">
                        <div className="flex items-center">
                          <feature.icon className="h-5 w-5 mr-2 text-accent" />
                          {feature.name}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-foreground">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          {feature.hvmElite}
                        </div>
                      </td>
                      <td className="px-3 py-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <X className="h-5 w-5 text-red-500 mr-2" />
                          {feature.others}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

