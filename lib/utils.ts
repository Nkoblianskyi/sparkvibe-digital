import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const getServiceImage = (title: string): string => {
  switch (title) {
    case "SEO Services":
      return "/placeholder-g3tys.png"
    case "PPC Services":
      return "/placeholder-gl9ax.png"
    case "Affiliate Services":
      return "/placeholder-m83wn.png"
    case "Content Services":
      return "/placeholder-pa4z7.png"
    case "Social Media Services":
      return "/placeholder-k4exm.png"
    case "Digital Marketing":
      return "/placeholder-6jgs6.png"
    default:
      return "/digital-services-concept.png"
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
