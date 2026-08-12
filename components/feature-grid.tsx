import { BadgeDollarSign, Gauge, Lock, TrendingUp, Clock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: BadgeDollarSign,
    title: 'Zero Brokerage Fees',
    description:
      'Keep every rupee of your profits. Trade across segments with absolutely no brokerage charges.',
  },
  {
    icon: TrendingUp,
    title: 'High Leverage Support',
    description:
      'Maximize your positions with flexible, high-leverage options built for serious traders.',
  },
  {
    icon: Gauge,
    title: 'Ultra-Fast Execution',
    description:
      'Lightning-quick order execution so you never miss a market move or a winning opportunity.',
  },
  {
    icon: Lock,
    title: '100% Secure & Direct Access',
    description:
      'Bank-grade security with direct market access on NSE/BSE and MCX. Your data stays protected.',
  },
  {
    icon: Clock,
    title: 'Fast 12-hour Withdrawals',
    description: 'Your profits in your account, faster than ever.',
  },
]

export function FeatureGrid() {
  return (
    <section className="px-4 pb-20 sm:px-6" aria-label="Key features">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {features.map((feature) => {
          const Icon = feature.icon
          return (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors duration-200 hover:border-primary/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-brand-glow transition-colors duration-200 group-hover:bg-primary/25">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
