"use client"

export default function Vision() {
  return (
    <section id="vision" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Vision</h2>
          <p className="text-slate-400 text-lg">Breaking boundaries, challenging conventions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-orange-500/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
              <span className="text-orange-500 text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Breaking the Mould</h3>
            <p className="text-slate-400">
              We challenge the status quo and bring process innovation in every step of research and development
            </p>
          </div>

          <div className="group p-8 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-orange-500/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
              <span className="text-orange-500 text-xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">No Shortcuts</h3>
            <p className="text-slate-400">
              We build all systems from scratch to have total control over performance and efficiency
            </p>
          </div>

          <div className="group p-8 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-orange-500/50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
              <span className="text-orange-500 text-xl">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">End to End Mastery</h3>
            <p className="text-slate-400">
              We use end-to-end manufacturing to deliver products with the highest standards of precision
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
