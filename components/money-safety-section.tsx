import Image from 'next/image'
import { ShieldCheck, Vault, Lock, BadgeCheck } from 'lucide-react'

const points = [
  { icon: Vault, text: 'Funds held in segregated accounts, never mixed with company money' },
  { icon: Lock, text: '256-bit SSL encryption protects every transaction' },
  { icon: BadgeCheck, text: 'Zero risk architecture — 100% of your capital stays protected' },
]

export function MoneySafetySection() {
  return (
    <section
      className="px-4 py-16 sm:px-6 sm:py-24"
      aria-label="Fund safety and bank-grade security"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-glow">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Your Money is Safe
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            100% Fund Safety &amp; Bank-Grade Security
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Your funds are stored in segregated accounts with 256-bit
            encryption. Zero risk, 100% protected.
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

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              256-Bit SSL Secured
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
              <Vault className="h-4 w-4" aria-hidden="true" />
              Segregated Vault
            </span>
          </div>
        </div>

        {/* Fund safety mockup */}
        <div className="relative order-first md:order-last">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-primary/15 blur-3xl"
          />
          <div className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/fund-safety-vault.png"
              alt="Phone screen showing a gold shield, Segregated Vault Protection checkmark, and 256-Bit SSL Secured security badges"
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
