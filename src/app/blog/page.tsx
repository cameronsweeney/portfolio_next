import Link from 'next/link';
import { formatDate, getBlogPosts, BlogPost } from './utils';

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

type BlogPostProps = {
  posts: BlogPost[];
}

type BlogPostSectionProps = {
  title: string;
  posts: BlogPost[];
}

const BlogPostComponents = (props: BlogPostProps) => {
  return props.posts.map((post) => (
    <Link key={post.slug} href={`/blog/${post.slug}`}>
      <div className="rounded-lg bg-white p-6 shadow-inner">
        <div>
          <h3 className="my-2 text-xl font-semibold text-black hover:text-gray-600">
            {post.metadata.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">{formatDate(post.metadata.publishedAt, false)}</span>
            <ArrowRightIcon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  ));
}

const BlogPostSection = (props: BlogPostSectionProps) => {
  const sectionComponent = (
    <div className="mt-6">
      <h2 className="text-3xl">{props.title}</h2>
      <div className="mt-4 mb-8 mx-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogPostComponents posts={props.posts} />
      </div>    
    </div>
  );
  return sectionComponent;
}

export default function BlogPosts() {
  let allBlogPosts = getBlogPosts()

  const blogPostSectionComponents = Object.keys(allBlogPosts).map(
    (section_status) => {
      return <BlogPostSection key={section_status} title={section_status} posts={allBlogPosts[section_status]}/>
    }
  );

  return (
    <div id="root" className="bg-black text-white">
      <div className="max-w-[66rem]">
        <div className="w-full text-xl flex justify-between">
          <p><Link key="profile" href="/">&larr; Back to profile</Link></p>
          <p></p>
        </div>
        <h1 className="my-6 mx-auto text-5xl lg:text-6xl font-extrabold tracking-tight text-center">Blog Posts</h1>
        <div>
          {blogPostSectionComponents}
        </div>
      </div>
    </div>
  );
}