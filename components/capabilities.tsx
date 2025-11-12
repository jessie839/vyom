"use client"

import { useState } from "react"

const capabilities = [
  {
    id: 1,
    title: "Long-Range Surveillance",
    description:
      "Extended operational range with real-time data transmission and advanced sensor integration for comprehensive coverage.",
  },
  {
    id: 2,
    title: "Autonomous Navigation",
    description:
      "AI-powered flight control systems with precision waypoint navigation and adaptive obstacle avoidance technology.",
  },
  {
    id: 3,
    title: "Multi-Sensor Integration",
    description:
      "Integrated payload systems supporting thermal imaging, LiDAR, hyperspectral cameras, and custom sensor configurations.",
  },
  {
    id: 4,
    title: "Secure Operations",
    description:
      "Military-grade encryption, secure communication protocols, and robust cybersecurity frameworks for critical operations.",
  },
]

export default function Capabilities() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="capabilities" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="space-y-12">
          <div className="space-y-3 animate-slide-up">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 animate-pulse">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Capabilities & Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive UAV systems designed for demanding operational environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, idx) => (
              <div
                key={capability.id}
                className="relative p-8 bg-card border border-border rounded-xl transition-all duration-300 cursor-pointer group overflow-hidden animate-slide-up hover:scale-105"
                onMouseEnter={() => setHoveredId(capability.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  borderColor: hoveredId === capability.id ? "rgb(255, 123, 0)" : undefined,
                  boxShadow: hoveredId === capability.id ? "0 0 40px rgba(255, 123, 0, 0.3)" : "none",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 animate-shimmer" />
                </div>

                <div className="relative space-y-4">
                  <div
                    className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:rotate-12"
                    style={{
                      backgroundColor:
                        hoveredId === capability.id ? "rgb(255, 123, 0 / 0.4)" : "rgb(255, 123, 0 / 0.2)",
                      transform: hoveredId === capability.id ? "scale(1.2) rotate(12deg)" : "scale(1) rotate(0deg)",
                    }}
                  >
                    <span className="text-lg font-bold text-primary">{capability.id}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
