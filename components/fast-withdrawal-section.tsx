import Image from 'next/image'
import { Clock, Wallet, Zap, CheckCircle2 } from 'lucide-react'

const points = [
  { icon: Clock, text: 'Guaranteed payout within 12 hours of your request' },
  { icon: Wallet, text: 'Withdraw directly to your bank account, hassle-free' },
  { icon: Zap, text: 'No lengthy holds — access your profits when you need them' },
]

export function FastWithdrawalSection() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-24"
      aria-label="12-hour fast withdrawals"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-glow">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            12-Hour Withdrawals
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            12-Hour Fast Withdrawals — Your Profits, Instantly
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Request a withdrawal and receive your funds within 12 hours,
            guaranteed. Access your money when you need it.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((point) => {
              const Icon = point.icon
              return (
                <li key={point.text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-brand-glow">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </span>
                </li>
              )
            })}
          </ul>

          <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />
            <span className="text-sm font-semibold text-emerald-300">
              Funds Credited within 12 hours, guaranteed
            </span>
          </div>
        </div>

        {/* Withdrawal success mockup */}
        <div className="relative order-1 md:order-2">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-primary/15 blur-3xl"
          />
          <div className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/fast-withdrawal-success.png"
              alt="Phone screen showing a withdrawal success confirmation with a 12-hour timeline and Funds Credited message"
              width={720}
              height={900}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
