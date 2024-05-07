import Link from 'next/link';
import { formatDate, getBlogPosts } from './utils';

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default function BlogPosts() {
  let allBlogPosts = getBlogPosts()
  const sortedBlogPosts = allBlogPosts.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1
    }
    return 1
  });

  const BlogPostComponents = sortedBlogPosts.map((post) => (
    <div key={post.slug} className="rounded-lg bg-white p-6 shadow-md">
      <Link href={`/blog/${post.slug}`}>
        <div>
          <h2 className="mt-2 text-xl font-semibold text-gray-900 hover:text-gray-600">
            {post.metadata.title}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{formatDate(post.metadata.publishedAt, false)}</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-2">{BlogPostComponents}</div>
  )
}