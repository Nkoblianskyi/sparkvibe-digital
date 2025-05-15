import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SparkVibe Digital | Creative Digital Agency",
  description:
    "SparkVibe Digital is a full-service digital agency specializing in web development, digital marketing, and design services.",
  metadataBase: new URL("https://sparkvibedigital.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sparkvibedigital.com",
    title: "SparkVibe Digital | Creative Digital Agency",
    description:
      "SparkVibe Digital is a full-service digital agency specializing in web development, digital marketing, and design services.",
    siteName: "SparkVibe Digital",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
