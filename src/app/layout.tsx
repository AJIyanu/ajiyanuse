import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AJ Iyanu | Software Engineer, Web Developer & AI Enthusiast",
  description: `I'm AJ Iyanu, a skilled software engineer specializing in backend development with 
    Django, Node.js, MySQL, and MongoDB. I also have expertise in frontend technologies
    like React.js, Tailwind CSS, and Figma. Passionate about building scalable web applications,
    optimizing server performance, and delivering high-quality digital solutions.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
