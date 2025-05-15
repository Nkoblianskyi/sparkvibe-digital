export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  benefits: string[]
  process: {
    step: string
    description: string
  }[]
}

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  description: string
  challenge: string
  solution: string
  results: string[]
  image: string
  tags: string[]
}

export interface Post {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  author: string
  category: string
  date: string
  readTime: number
  image: string
  tags: string[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface AboutContent {
  mission: string
  vision: string
  values: {
    title: string
    description: string
  }[]
  history: string
  approach: {
    title: string
    description: string
  }[]
  team: {
    position: string
    description: string
  }[]
}
