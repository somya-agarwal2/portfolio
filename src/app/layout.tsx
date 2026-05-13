import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somya Agarwal | Full Stack Developer & AI/ML Student",
  description: "Portfolio of Somya Agarwal, a CS Engineering student specializing in Spring Boot, React, and AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <PageLoader />
          <ScrollProgress />
          <Navbar />
          <main className="overflow-hidden">
            {children}
          </main>
          <Footer />
          <div className="noise-overlay" />
        </ThemeProvider>
      </body>
    </html>
  );
}
