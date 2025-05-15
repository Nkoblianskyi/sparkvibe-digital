"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import LinkWrapper from "./link-wrapper"
import { ThemeToggle } from "./theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isMobile = useMobile()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <LinkWrapper href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              SparkVibe
            </span>
            <span className="text-2xl font-semibold">Digital</span>
          </LinkWrapper>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <LinkWrapper
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </LinkWrapper>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button asChild size="sm">
              <LinkWrapper href="/contact">Get in Touch</LinkWrapper>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background">
          <div className="flex flex-col p-4 space-y-4">
            {navigation.map((item) => (
              <LinkWrapper
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium py-2 transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </LinkWrapper>
            ))}
            <Button asChild className="w-full mt-4">
              <LinkWrapper href="/contact" onClick={() => setIsOpen(false)}>
                Get in Touch
              </LinkWrapper>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
