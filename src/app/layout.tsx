import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { lato, barlow_semi_condensed } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Cameron Sweeney",
  description: "Profile for developer & educator Cameron Sweeney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_semi_condensed.className}>{children}</body>
    </html>
  );
}
