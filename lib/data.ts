import fs from "fs"
import path from "path"
import type { Service, Project, Post, FaqItem, AboutContent } from "./types"

function loadJsonData<T>(filePath: string): T {
  const fullPath = path.join(process.cwd(), "public", "data", filePath)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return JSON.parse(fileContents) as T
}

export function getServices(): Service[] {
  return loadJsonData<Service[]>("services.json")
}

export function getServiceBySlug(slug: string): Service | undefined {
  const services = getServices()
  return services.find((service) => service.slug === slug)
}

export function getProjects(): Project[] {
  return loadJsonData<Project[]>("projects.json")
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getProjects()
  return projects.find((project) => project.slug === slug)
}

export function getPosts(): Post[] {
  return loadJsonData<Post[]>("posts.json")
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getPosts()
  return posts.find((post) => post.slug === slug)
}

export function getFaqs(): FaqItem[] {
  return loadJsonData<FaqItem[]>("faq.json")
}

export function getAboutContent(): AboutContent {
  return loadJsonData<AboutContent>("about.json")
}
