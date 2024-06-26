import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts, CustomMDX } from '../utils'

import Link from 'next/link';

import styles from '@/app/blog/ui/blog_post.module.css';

const baseUrl = 'localhost:3000/'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return Object.values(posts).flat().map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: any) {
  let posts = getBlogPosts()

  let post = Object.values(posts).flat().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description
  } = post.metadata

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`
    }
  }
}

export default function Blog({ params }: any) {
  let posts = getBlogPosts();
  let post = Object.values(posts).flat().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div id="root" className="bg-black text-white">
      <section className={styles.blog_post_page}>
        <div className="mb-4 text-xl flex justify-between">
          <Link key="blog" href="/blog" className={styles.backlink}>&larr; Back to all posts</Link>
          <p>{formatDate(post.metadata.publishedAt)}</p>
        </div>
        <article className={styles.blog_post}>
          <h1 className="my-4 lg:my-5 text-4xl lg:text-5xl text-fuchsia-400">{post.metadata.title}</h1>
          <CustomMDX source={post.content} />
        </article>
      </section>
    </div>
  )
}