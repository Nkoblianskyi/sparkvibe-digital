import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getServices, getProjects, getPosts, getFaqs } from "@/lib/data"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"
import HomeBlogSection from "@/components/home-blog-section"

export const metadata: Metadata = {
  title: "SparkVibe Digital | Creative Digital Agency",
  description:
    "SparkVibe Digital is a full-service digital agency specializing in web development, digital marketing, and design services.",
}

export default function Home() {
  const services = getServices()
  const projects = getProjects().slice(0, 3)
  const posts = getPosts().slice(0, 3)
  const faqs = getFaqs()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-violet-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
            Ignite Your Digital Presence With Strategy-Driven Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            We combine creative excellence with technical expertise to deliver digital experiences that drive real
            results for forward-thinking businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-gray-600 hover:bg-white/10">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/3bf3f740d7ce877c181e975459013834.jpg"
                alt="SparkVibe Digital Team"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About SparkVibe Digital</h2>
              <div className="h-1 w-20 bg-violet-600 mb-6"></div>
              <p className="text-gray-700 mb-6">
                Founded in 2019, SparkVibe Digital is a full-service digital agency dedicated to helping businesses
                thrive in the digital landscape. We combine strategic thinking, creative excellence, and technical
                expertise to deliver solutions that drive meaningful results.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of specialists works collaboratively to create integrated digital experiences that engage your
                audience, strengthen your brand, and grow your business. We believe in building lasting partnerships
                with our clients, becoming an extension of your team rather than just a service provider.
              </p>
              <Button asChild>
                <Link href="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Services</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer a comprehensive range of digital services to help your business succeed online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                <div className="h-14 w-14 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-violet-600 text-xl font-semibold">{service.title.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-violet-600 font-medium flex items-center gap-1 hover:text-violet-700"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We work with businesses across various industries, bringing specialized expertise to each sector.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">E-commerce</h3>
              <p className="text-gray-600">
                Creating seamless shopping experiences that convert visitors into customers and drive sustainable
                growth.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Real Estate</h3>
              <p className="text-gray-600">
                Helping property professionals showcase their listings and connect with potential buyers and renters.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Healthcare</h3>
              <p className="text-gray-600">
                Delivering accessible, user-friendly digital solutions that enhance patient experiences and support
                providers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">SaaS</h3>
              <p className="text-gray-600">
                Building compelling online presences for software companies that drive user acquisition and retention.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Education</h3>
              <p className="text-gray-600">
                Creating engaging digital learning environments that enhance educational outcomes and experiences.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="mb-4">
                <svg className="h-10 w-10 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Professional Services</h3>
              <p className="text-gray-600">
                Helping law firms, consultancies, and other service providers establish authority and generate leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Workflow</h2>
            <div className="h-1 w-20 bg-violet-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our strategic approach ensures we deliver solutions that meet your business objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-6 h-full">
                <div className="text-violet-400 text-5xl font-bold mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3">Discovery</h3>
                <p className="text-gray-300">
                  We start by understanding your business, audience, challenges, and goals to create a solid foundation.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-6 h-full">
                <div className="text-violet-400 text-5xl font-bold mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3">Strategy</h3>
                <p className="text-gray-300">
                  We develop a comprehensive plan tailored to your specific needs and audience expectations.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-lg p-6 h-full">
                <div className="text-violet-400 text-5xl font-bold mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3">Execution</h3>
                <p className="text-gray-300">
                  Our expert team brings the strategy to life with meticulous attention to detail and quality.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div>
              <div className="bg-slate-800 rounded-lg p-6 h-full">
                <div className="text-violet-400 text-5xl font-bold mb-4">04</div>
                <h3 className="text-xl font-semibold mb-3">Optimization</h3>
                <p className="text-gray-300">
                  We continuously analyze, refine, and improve to ensure long-term success and maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Challenges Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Challenges We Solve</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Common challenges our clients face that we help them overcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">"We need more qualified leads."</h3>
              <p className="text-gray-600 mb-4">
                We develop targeted digital strategies that attract the right audience and convert visitors into
                qualified leads.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Conversion-focused website design</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">SEO and content marketing</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Targeted paid advertising</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">"Our website isn't generating results."</h3>
              <p className="text-gray-600 mb-4">
                We transform underperforming websites into powerful business tools that engage visitors and drive
                conversions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">UX/UI optimization</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Performance improvement</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Conversion rate optimization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">"We don't rank on Google."</h3>
              <p className="text-gray-600 mb-4">
                We implement comprehensive SEO strategies that improve your visibility in search results and drive
                organic traffic.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Technical SEO improvements</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Content strategy</span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Local SEO optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Check out some of our recent work and the results we've achieved for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.summary}</p>
                  <Button asChild variant="outline">
                    <Link href={`/projects/${project.slug}`}>View Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      <HomeBlogSection />

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqs.slice(0, 4).map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-violet-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our team can help you achieve your business goals with tailored digital solutions.
          </p>
          <Button asChild size="lg" className="bg-white text-violet-700 hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
