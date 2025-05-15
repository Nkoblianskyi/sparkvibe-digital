import LinkWrapper from "@/components/link-wrapper"
import { getPosts } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HomeBlogSection() {
  const posts = getPosts().slice(0, 3)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <div className="h-1 w-20 bg-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">Insights, tips, and trends from our digital experts.</p>
        </div>

        <div className="space-y-16">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-72 w-full rounded-lg overflow-hidden">
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
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
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

        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline">
            <LinkWrapper href="/blog">View All Articles</LinkWrapper>
          </Button>
        </div>
      </div>
    </section>
  )
}
