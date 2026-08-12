import { Users, TrendingUp, ShieldCheck } from 'lucide-react'

const stats = [
  { icon: Users, value: '1,00,000+', label: 'Active Traders' },
  { icon: TrendingUp, value: 'F&O + MCX', label: 'Daily Execution' },
  { icon: ShieldCheck, value: 'Verified', label: 'Safe & Trusted' },
]

export function TrustBanner() {
  return (
    <section className="px-4 sm:px-6" aria-label="India's biggest trading platform">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-b from-primary/10 to-card px-6 py-8 text-center sm:py-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-sm font-semibold text-foreground">
          <span aria-hidden="true">🇮🇳</span>
          India&apos;s Biggest &amp; Most Trusted Trading Platform
        </span>
        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Over 1,00,000+ active Indian traders trust MYT Trading for daily F&amp;O
          and Commodity execution.
        </p>

        <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex items-center justify-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-brand-glow">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="text-left">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-lg font-bold leading-tight text-foreground">
                    {stat.value}
                  </dd>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
