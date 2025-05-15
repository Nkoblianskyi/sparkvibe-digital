import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const getServiceImage = (title: string): string => {
  switch (title) {
    case "SEO Services":
      return "/65ca8b99f19ae295c7064e13733c6872.jpg"
    case "PPC Services":
      return "/df2ada68e83aa79dbef3ffa297f30c84.jpg"
    case "Affiliate Services":
      return "/e0c9cc90920a39f5619cf78e6482ea6b.jpg"
    case "Content Services":
      return "/ef81f8bb773eba451c3c4f69ba57717a.jpg"
    case "Social Media Services":
      return "/b134c8e471a4dc4c8ba40b2f75afbfa9.jpg"
    case "Digital Marketing":
      return "/62c709c76650c2e902d16565a5b33657.jpg"
    default:
      return "/digital-services-concept.png"
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
