import Image from "next/image"
import { getPosts } from "@/lib/data"
import type { Metadata } from "next"
import LinkWrapper from "@/components/link-wrapper"

export const metadata: Metadata = {
  title: "Blog | SparkVibe Digital",
  description:
    "Read the latest articles, insights, and trends in digital marketing, web development, UX/UI design, and more.",
}

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl opacity-90">Insights, tips, and trends from our digital experts.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts - Checkerboard Layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                    <span className="mx-2">•</span>
                    <span className="text-violet-600 font-medium">{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <LinkWrapper
                    href={`/blog/${post.slug}`}
                    className="text-violet-600 font-medium hover:text-violet-700 inline-flex items-center"
                  >
                    Read Article
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </LinkWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
