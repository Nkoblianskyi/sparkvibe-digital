import type { Post } from "@/lib/types"
import Image from "next/image"
import LinkWrapper from "./link-wrapper"

interface RelatedPostsProps {
  currentPostId: string
  category: string
  posts: Post[]
}

export default function RelatedPosts({ currentPostId, category, posts }: RelatedPostsProps) {
  // Filter posts by the same category, excluding the current post
  const relatedPosts = posts.filter((post) => post.category === category && post.id !== currentPostId).slice(0, 3)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm">
            <div className="h-48 relative">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{post.readTime} min read</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <LinkWrapper
                href={`/blog/${post.slug}`}
                className="text-violet-600 font-medium hover:text-violet-700 inline-flex items-center text-sm"
              >
                Read Article
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </LinkWrapper>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
