import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Psychologist in Santa Monica, CA | Anxiety, Trauma & Burnout Therapy",
  description:
    "Warm, collaborative therapy for adults in Santa Monica, California. Dr. Maya Reynolds, PsyD offers in-person and telehealth therapy across California for anxiety, panic, trauma, burnout and perfectionism. CBT, EMDR, mindfulness and body-oriented care.",
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD — Therapy in Santa Monica, CA",
    description:
      "Therapy for adults navigating anxiety, trauma, and burnout. In-person in Santa Monica and secure telehealth across California.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
