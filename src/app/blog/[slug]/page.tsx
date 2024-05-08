import { notFound } from 'next/navigation'
import { formatDate, getBlogPosts, CustomMDX } from '../utils'

import Link from 'next/link';

import styles from '@/app/blog/[slug]/blog_post.module.css';

const baseUrl = 'localhost:3000/'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: any) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
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
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className={styles.blog_post_page}>
      <h1>
        {post.metadata.title}
      </h1>
      <div>
        <p>
            <Link key="blog" href="/blog">^Back to list of blog posts</Link>
        </p>
        <p>
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className={styles.blog_post}>
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}