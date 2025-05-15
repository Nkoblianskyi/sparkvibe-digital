import Link from "next/link"
import { getServices } from "@/lib/data"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { getServiceImage } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services | SparkVibe Digital",
  description:
    "Explore our comprehensive range of digital services including SEO, PPC, affiliate marketing, content creation, social media, and digital marketing.",
}

export default function ServicesPage() {
  const services = getServices()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl opacity-90">Comprehensive digital solutions tailored to your business objectives.</p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
                    <img
                      src={getServiceImage(service.title) || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <div className="h-1 w-20 bg-violet-600 mb-6"></div>
                  <p className="text-gray-700 mb-6">{service.fullDescription}</p>
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
