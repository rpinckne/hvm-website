import "./globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata = {
  title: "HVM Elite | Personalized Growth Strategies",
  description:
    "HVM Elite offers personalized, science-backed strategies for holistic growth across mind, body, heart, and hustle.",
  openGraph: {
    title: "HVM Elite | Personalized Growth Strategies",
    description:
      "Unlock your full potential with HVM Elite's personalized, science-backed strategies for holistic growth.",
    url: "https://www.hvmelite.com",
    siteName: "HVM Elite",
    images: [
      {
        url: "https://www.hvmelite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HVM Elite | Personalized Growth Strategies",
    description:
      "Unlock your full potential with HVM Elite's personalized, science-backed strategies for holistic growth.",
    images: ["https://www.hvmelite.com/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

