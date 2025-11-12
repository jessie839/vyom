"use client"

export default function Stats() {
  const stats = [
    { value: "15+", label: "Years in Aviation" },
    { value: "200+", label: "Projects Delivered" },
    { value: "50+", label: "Patents Filed" },
    { value: "30+", label: "Team Members" },
  ]

  return (
    <section className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-8 border-b-2 border-orange-500/30 hover:border-orange-500 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
