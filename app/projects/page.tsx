import Link from "next/link"
import Image from "next/image"
import { getProjects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | SparkVibe Digital",
  description:
    "Explore our portfolio of successful digital projects including web development, digital marketing, and design.",
}

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl opacity-90">
              Explore our portfolio of successful projects and the results we've achieved for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-60 relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-violet-600">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <Button asChild variant="outline">
                    <Link href={`/projects/${project.slug}`}>View Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
