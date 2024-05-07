import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="root">
      <h1>Blog Page</h1>
      <p>
          <Link key="profile" href="/">Back to profile</Link>
      </p>
      <h2>List of blog posts</h2>
      <>
        {children}
      </>
    </div>
  );
}