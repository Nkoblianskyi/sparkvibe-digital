import Image from "next/image"
import { getAboutContent } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | SparkVibe Digital",
  description:
    "Learn about SparkVibe Digital, our mission, values, and approach to creating successful digital experiences.",
}

// Add this function before the AboutPage component

function getTeamMemberImage(position: string): string {
  switch (position) {
    case "Strategic Director":
      return "/d9b06f40361b448f09fb282864e7fb4d.jpg"
    case "Creative Lead":
      return "/3c8d8ec71322590d1073017480de3ad1.jpg"
    case "Technical Architect":
      return "/b80973a8cd87347caa65b7631e707df1.jpg"
    case "UX Specialist":
      return "/c576773194eafcc481bfdbe28cfa66f2.jpg"
    case "Digital Marketing Expert":
      return "/9a7a228542c0d425ef8990759e8038ab.jpg"
    case "Content Strategist":
      return "/61c0d818017e77dde6cfbb986197865e.jpg"
    default:
      return "/61c0d818017e77dde6cfbb986197865e.jpg"
  }
}

export default function AboutPage() {
  const about = getAboutContent()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SparkVibe Digital</h1>
            <p className="text-xl opacity-90">
              We're a team of digital experts passionate about creating impactful digital experiences that drive real
              business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <div className="h-1 w-20 bg-violet-600 mb-6"></div>
              <p className="text-gray-700">{about.mission}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <div className="h-1 w-20 bg-violet-600 mb-6"></div>
              <p className="text-gray-700">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/020d54f3c2757c96f0bc844148faeeeb.jpg"
                alt="SparkVibe Digital History"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-black">Our Story</h2>
              <div className="h-1 w-20 bg-violet-600 mb-6"></div>
              <p className="text-gray-700 mb-6">{about.history}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              The core principles that guide our work and relationships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 text-black">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Approach</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              How we work to create successful outcomes for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.approach.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <div className="text-violet-600 text-4xl font-bold mb-4">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="text-xl font-semibold mb-3 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">Meet the specialists who bring our projects to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {about.team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 relative">
                  <Image
                    src={getTeamMemberImage(member.position) || "/placeholder.svg"}
                    alt={member.position}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black">{member.position}</h3>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
