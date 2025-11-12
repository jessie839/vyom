"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import { Marquee } from "@/components/marquee"
import About from "@/components/about"
import Capabilities from "@/components/capabilities"
import Highlights from "@/components/highlights"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Capabilities />
      <Highlights />
      <Contact />
      <Footer />
    </main>
  )
}
