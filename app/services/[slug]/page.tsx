import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getServiceBySlug, getServices } from "@/lib/data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ServiceSchema from "@/components/service-schema"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found | SparkVibe Digital",
    }
  }

  return {
    title: `${service.title} | SparkVibe Digital`,
    description: service.fullDescription,
  }
}

export async function generateStaticParams() {
  const services = getServices()

  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div>
      <ServiceSchema service={service} />

      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl opacity-90">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">{service.fullDescription}</p>

              <h2 className="text-3xl font-bold mb-6">Our Process</h2>
              <div className="space-y-8 mb-12">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-xl">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                <p className="text-gray-700 mb-6">
                  Contact us today to discuss how our {service.title.toLowerCase()} services can help your business
                  grow.
                </p>
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {getServices().map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.slug}`}
                        className={`block p-2 rounded-md ${s.id === service.id ? "bg-violet-100 text-violet-700 font-medium" : "hover:bg-gray-50"}`}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
