"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/military-uav-drone-system.jpg')",
              backgroundAttachment: "fixed",
              backgroundSize: "110%",
              transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)`,
              filter: "brightness(0.25) contrast(1.3) saturate(1.1)",
              willChange: "transform",
            }}
          />

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 animate-plane-fly opacity-40">
              <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                <g opacity="0.6">
                  <path
                    d="M -200 200 Q 150 150 500 180 T 1400 200"
                    stroke="rgb(255,123,0)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                  <circle cx="500" cy="180" r="15" fill="rgb(255,123,0)" opacity="0.8" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-0 animate-plane-fly-slow opacity-30" style={{ animationDelay: "4s" }}>
              <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
                <g opacity="0.4">
                  <path
                    d="M 1400 550 Q 800 500 300 520 T -200 550"
                    stroke="rgb(255,123,0)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="8,4"
                    opacity="0.4"
                  />
                  <circle cx="300" cy="520" r="12" fill="rgb(255,123,0)" opacity="0.6" />
                </g>
              </svg>
            </div>
          </div>

          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

          <div className="absolute inset-0 opacity-15 animate-pulse">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <defs>
                <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(255,123,0)" strokeWidth="1" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#heroGrid)" />
            </svg>
          </div>

          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary/20 animate-float"
                style={{
                  width: Math.random() * 100 + 20 + "px",
                  height: Math.random() * 100 + 20 + "px",
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                  animationDelay: i * 0.15 + "s",
                  animationDuration: Math.random() * 3 + 4 + "s",
                  filter: "blur(40px)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center space-y-8">
          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s ease-out",
            }}
          >
            <span className="inline-block px-6 py-2 bg-primary/40 text-primary rounded-full text-sm font-bold animate-pulse border border-primary/70 mb-6">
              Next Generation UAV Technology
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 animate-slide-up text-balance leading-tight drop-shadow-2xl">
              VyomGarud
            </h1>
            <p
              className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto animate-slide-up mb-8"
              style={{ animationDelay: "0.15s" }}
            >
              Military-grade autonomous systems engineered for precision, power, and limitless possibilities.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-110 hover:shadow-2xl hover:shadow-primary/60 active:scale-95 animate-glow-pulse">
              Launch Now
            </button>
            <button className="px-10 py-4 bg-card/40 backdrop-blur border-2 border-primary text-foreground rounded-lg font-bold text-lg hover:bg-card/80 transition-all hover:scale-105 group">
              Discover More →
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="flex flex-col items-center gap-3">
            <span className="text-primary font-semibold text-sm">Scroll to explore</span>
            <svg className="w-6 h-6 text-primary animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(13,27,42,0.9) 0%, rgba(31,41,55,0.85) 100%), url('/military-uav-drone-system.jpg')",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              transform: `translateY(${scrollY * 0.2}px)`,
              filter: "saturate(0.8) brightness(0.35)",
              willChange: "transform",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse" />

          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <defs>
                <pattern id="techPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="rgb(255,123,0)" opacity="0.5" />
                  <path
                    d="M 10 10 L 110 10 L 110 110 L 10 110 Z"
                    fill="none"
                    stroke="rgb(255,123,0)"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                  <circle cx="110" cy="110" r="2" fill="rgb(255,123,0)" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="1200" height="800" fill="url(#techPattern)" />
            </svg>
          </div>

          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 animate-rotate-slow opacity-30">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="80" fill="none" stroke="rgb(255,123,0)" strokeWidth="1" opacity="0.3" />
                <circle cx="100" cy="20" r="4" fill="rgb(255,123,0)" opacity="0.6" />
              </svg>
            </div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 animate-rotate-slow opacity-25"
              style={{ animationDuration: "20s", animationDirection: "reverse" }}
            >
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="60" fill="none" stroke="rgb(255,123,0)" strokeWidth="1" opacity="0.4" />
                <circle cx="100" cy="40" r="3" fill="rgb(255,123,0)" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-foreground animate-slide-up text-balance drop-shadow-2xl">
            Powered by Innovation
          </h2>
          <p
            className="text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up"
            style={{ animationDelay: "0.15s" }}
          >
            Cutting-edge autonomous flight systems with military-grade precision and reliability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { title: "Real-time Control", desc: "Live command & telemetry" },
              { title: "AI Navigation", desc: "Autonomous path planning" },
              { title: "Rugged Design", desc: "Military-spec durability" },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 bg-card/30 backdrop-blur border border-primary/30 rounded-xl hover:border-primary hover:bg-card/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/40 transition-colors">
                  <div className="w-6 h-6 bg-primary/60 rounded animate-pulse group-hover:animate-glow-pulse" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
