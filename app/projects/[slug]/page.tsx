import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getProjectBySlug, getProjects } from "@/lib/data"
import { Button } from "@/components/ui/button"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: "Project Not Found | SparkVibe Digital",
    }
  }

  return {
    title: `${project.title} | SparkVibe Digital`,
    description: project.summary,
  }
}

export async function generateStaticParams() {
  const projects = getProjects()

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-violet-200 mb-4">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl opacity-90">{project.summary}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={675}
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 text-lg">{project.description}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Challenge</h2>
              <p className="text-gray-700 text-lg">{project.challenge}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Solution</h2>
              <p className="text-gray-700 text-lg">{project.solution}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-violet-100 text-violet-800 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 p-8 bg-gray-50 rounded-lg">
            <div>
              <h3 className="text-xl font-bold mb-2">Interested in a similar project?</h3>
              <p className="text-gray-600">Let's discuss how we can help you achieve similar results.</p>
            </div>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/projects" className="text-violet-600 font-medium hover:text-violet-800">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
