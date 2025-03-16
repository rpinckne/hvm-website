"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "var(--accent)",
      mixBlendMode: "difference",
    },
  }

  const textEnter = () => setCursorVariant("text")
  const textLeave = () => setCursorVariant("default")

  useEffect(() => {
    const handleTextEnter = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName.toLowerCase() === "h1" ||
        (e.target as HTMLElement).tagName.toLowerCase() === "h2"
      ) {
        textEnter()
      }
    }
    const handleTextLeave = (e: MouseEvent) => {
      if (
        (e.target as HTMLElement).tagName.toLowerCase() === "h1" ||
        (e.target as HTMLElement).tagName.toLowerCase() === "h2"
      ) {
        textLeave()
      }
    }

    document.addEventListener("mouseover", handleTextEnter)
    document.addEventListener("mouseout", handleTextLeave)

    return () => {
      document.removeEventListener("mouseover", handleTextEnter)
      document.removeEventListener("mouseout", handleTextLeave)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-accent pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
    />
  )
}

