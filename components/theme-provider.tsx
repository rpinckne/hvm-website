"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider {...props}>
      <div suppressHydrationWarning>
        {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
      </div>
    </NextThemesProvider>
  )
} 