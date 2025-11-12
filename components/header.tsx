"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useState(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(var(--background-rgb), 0.8)" : "rgb(var(--background-rgb))",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: isScrolled ? "1px solid rgb(var(--border-rgb))" : "1px solid transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-bold text-foreground">VyomGarud</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "About", href: "#about" },
            { name: "Capabilities", href: "#capabilities" },
            { name: "Highlights", href: "#highlights" },
            { name: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <button className="hidden md:block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95">
          Get Started
        </button>

        <button
          className="md:hidden text-foreground transition-transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-4 space-y-4">
            <Link href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#capabilities" className="block text-muted-foreground hover:text-foreground transition-colors">
              Capabilities
            </Link>
            <Link href="#highlights" className="block text-muted-foreground hover:text-foreground transition-colors">
              Highlights
            </Link>
            <Link href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            <button className="w-full px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
