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
      stroke="black"
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
    <Link key={post.slug} href={`/blog/${post.slug}`}>
      <div className="rounded-lg bg-white p-6 shadow-inner">
        <div>
          <h2 className="my-2 text-xl font-semibold text-black hover:text-gray-600">
            {post.metadata.title}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{formatDate(post.metadata.publishedAt, false)}</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <>
    <h1 className="m-6 text-5xl lg:text-6xl font-extrabold tracking-tight">Blog Posts</h1>
    <p className="text-2xl hover:underline">
        <Link key="profile" href="/">&larr; Back to profile</Link>
    </p>
    <div className="m-8 grid gap-8 lg:grid-cols-3">{BlogPostComponents}</div>
    </>
  );
}