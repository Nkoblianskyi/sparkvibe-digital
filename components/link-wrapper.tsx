"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import type { AnchorHTMLAttributes, ReactNode } from "react"

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function LinkWrapper({ href, children, className }: LinkWrapperProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    router.push(href)
    window.scrollTo(0, 0)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
