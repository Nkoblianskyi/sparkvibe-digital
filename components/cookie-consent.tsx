"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import LinkWrapper from "./link-wrapper"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base">
          <p>
            We use cookies to improve your experience on our website. By browsing this website, you agree to our use of
            cookies.{" "}
            <LinkWrapper href="/cookie-policy" className="underline hover:text-violet-300">
              Learn more
            </LinkWrapper>
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="border-white hover:bg-slate-700 text-gray-400" onClick={rejectCookies}>
            Reject
          </Button>
          <Button variant="default" onClick={acceptCookies}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
