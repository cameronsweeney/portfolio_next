import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="root" className="bg-black text-white">{children}</div>
  );
}