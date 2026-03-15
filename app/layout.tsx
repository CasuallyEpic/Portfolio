import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Oneko from "@/components/oneko";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bishwa Bastola | Lead Full Stack Engineer & Digital Architect",
  description: "I am Bishwa Bastola, a Full Stack Engineer dedicated to bridging the gap between complex logic and elegant design. My approach is rooted in structural integrity and performance.",
  keywords: [
    "Full Stack Developer", 
    "Lead Full Stack Engineer",
    "Digital Architect",
    "Next.js", 
    "App Development", 
    "React", 
    "TypeScript", 
    "Bishwa Bastola",
    "Bishwa",
    "Bastola",
    "Bishwa Bastola Fullstack Developer",
    "Bishwa Fullstack Developer",
    "Bastola Fullstack Developer",
    "Bishwa Developer",
    "Yugant Xettri",
    "Yugant",
    "Xettri",
    "Fullstack",
    "Fullstack Developer",
    "Developer"
  ],
  authors: [{ name: "Bishwa Bastola" }],
  openGraph: {
    title: "Bishwa Bastola | Lead Full Stack Engineer & Digital Architect",
    description: "I am Bishwa Bastola, a Full Stack Engineer dedicated to bridging the gap between complex logic and elegant design.",
    url: "https://bishwap.com.np",
    siteName: "Bishwa Bastola Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishwa Bastola | Lead Full Stack Engineer & Digital Architect",
    description: "I am Bishwa Bastola, a Full Stack Engineer dedicated to bridging the gap between complex logic and elegant design.",
  },
  alternates: {
    canonical: "https://bishwap.com.np",
  },
  icons: {
    icon: [
      { url: "https://github.com/CasuallyEpic.png?v=4" },
    ],
    apple: [
      { url: "https://github.com/CasuallyEpic.png?v=4" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6499390305541184">
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6499390305541184"
     crossorigin="anonymous"></script>
      </head>
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-purple-500/30`}>
        <Oneko />
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black opacity-50" />
        {children}
      </body>
    </html>
  );
}
