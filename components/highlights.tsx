"use client"

import { useState } from "react"

const highlights = [
  {
    title: "Military-Grade Engineering",
    description: "Built to defense standards with redundant systems and fail-safe mechanisms",
  },
  {
    title: "Extended Endurance",
    description: "24+ hours of continuous operation with optimized power management and aerodynamics",
  },
  {
    title: "Advanced Autonomy",
    description: "AI-driven decision making with machine learning capabilities for adaptive missions",
  },
]

export default function Highlights() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="highlights" className="py-20 px-4 bg-card/50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-3 animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 animate-pulse">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Key Highlights</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="space-y-4 p-8 rounded-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-primary/30 animate-slide-up"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  backgroundColor: hoveredIndex === index ? "rgba(255, 123, 0, 0.08)" : "transparent",
                  transform: hoveredIndex === index ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                <div
                  className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/40"
                  style={{
                    transform: hoveredIndex === index ? "scale(1.3) rotate(15deg)" : "scale(1) rotate(0deg)",
                  }}
                >
                  <div className="w-7 h-7 bg-gradient-to-br from-primary to-primary/50 rounded-full group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
