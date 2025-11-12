"use client"

import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState([
    { stat: "100%", label: "Mission Reliability Rate", current: 0 },
    { stat: "24h+", label: "Extended Flight Duration", current: 0 },
    { stat: "50+", label: "Global Operations", current: 0 },
  ])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const intervals = [
      setInterval(() => {
        setStats((prev) =>
          prev.map((s, i) => ({
            ...s,
            current:
              i === 0
                ? Math.min(s.current + 5, 100)
                : i === 1
                  ? Math.min(s.current + 2, 24)
                  : Math.min(s.current + 2, 50),
          })),
        )
      }, 30),
    ]

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [isVisible])

  return (
    <section id="about-section" className="py-20 px-4 bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30 animate-pulse">
              Our Mission
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-balance animate-slide-up"
              style={{
                opacity: isVisible ? 1 : 0.5,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease-out",
              }}
            >
              Redefining Autonomous Flight
            </h2>
          </div>

          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            VyomGarud is dedicated to pioneering advanced UAV systems that combine military-grade reliability with
            cutting-edge autonomous technology. Our platforms are engineered for precision operations across diverse
            environments, delivering uncompromising performance when it matters most.
          </p>

          <p
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Built on decades of aerospace expertise, we're committed to pushing the boundaries of what's possible in
            unmanned systems, enabling organizations to accomplish critical missions with confidence.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {stats.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-background/50 rounded-lg border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-2 group-hover:animate-pulse">
                  {item.current}
                  {item.stat.replace(/[0-9]/g, "")}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
