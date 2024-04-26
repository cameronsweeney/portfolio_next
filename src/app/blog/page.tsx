import Link from 'next/link';


export default function Page() {
    return (
      <div id="root">
        <h1>Blog Page</h1>
        <p>
            <Link key="profile" href="/">Back to profile</Link>
        </p>
        <h2>List of blog posts</h2>
        <ul>
          <li>
            <Link key="blog_1" href="/blog/1">What do why game</Link>
          </li>
          <li>
            <Link key="blog_2" href="/blog/2">What do why game: MDX edition</Link>
          </li>
        </ul>
      </div>
    )
};