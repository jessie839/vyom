"use client"

export default function Technology() {
  const technologies = [
    { name: "Additive Manufacturing", icon: "🖨️" },
    { name: "PCB Assembly", icon: "⚙️" },
    { name: "Composite Fabrication", icon: "🔬" },
    { name: "AI Integration", icon: "🤖" },
  ]

  return (
    <section id="technology" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Innovation at Its Core</h2>
          <p className="text-slate-400 text-lg">Research-led product and process innovation</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="group p-6 bg-slate-800/30 hover:bg-slate-800/60 border border-slate-700/30 hover:border-orange-500/50 rounded-lg text-center transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tech.icon}</div>
              <p className="font-semibold text-sm">{tech.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">State-of-the-Art Infrastructure</h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            End-to-end manufacturing capabilities with precision engineering at every stage
          </p>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition-all hover:scale-105">
            Explore Technology
          </button>
        </div>
      </div>
    </section>
  )
}
