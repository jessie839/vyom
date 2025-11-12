export function Marquee() {
  const items = [
    "Advanced Autonomy",
    "Military-Grade Security",
    "24+ Hour Endurance",
    "Global Operations",
    "Precision Engineering",
    "Advanced Autonomy",
    "Military-Grade Security",
    "24+ Hour Endurance",
  ]

  return (
    <div className="relative w-full overflow-hidden bg-background/50 py-6 border-y border-border/50">
      <div className="flex gap-8 animate-marquee">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span className="text-sm font-semibold text-primary">{item}</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
