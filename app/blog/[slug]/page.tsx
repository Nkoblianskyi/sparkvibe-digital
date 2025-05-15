import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getPostBySlug, getPosts } from "@/lib/data"
import BlogPostSchema from "@/components/blog-post-schema"
import LinkWrapper from "@/components/link-wrapper"
import RelatedPosts from "@/components/related-posts"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | SparkVibe Digital",
    }
  }

  return {
    title: `${post.title} | SparkVibe Digital Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  const posts = getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  const allPosts = getPosts()

  if (!post) {
    notFound()
  }

  return (
    <div>
      <BlogPostSchema post={post} />

      {/* Hero Section */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-violet-700 to-violet-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <LinkWrapper href="/blog" className="text-violet-200 hover:text-white">
                ← Back to Blog
              </LinkWrapper>
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl opacity-90 mb-12">{post.excerpt}</p>
            <div className="relative h-[400px] w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <span className="text-violet-700 font-bold">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-gray-500 text-sm">{post.category}</div>
                </div>
              </div>
            </div>

            {post.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-6">
                {paragraph}
              </p>
            ))}

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <LinkWrapper href="/blog" className="text-violet-600 font-medium hover:text-violet-800">
                ← Back to Blog
              </LinkWrapper>
            </div>

            {/* Related Posts */}
            <RelatedPosts currentPostId={post.id} category={post.category} posts={allPosts} />
          </div>
        </div>
      </section>
    </div>
  )
}
