import Image from 'next/image'
import { ShieldCheck, Lock, ServerCog } from 'lucide-react'

const points = [
  { icon: Lock, text: 'Bank-grade encryption on every order and login' },
  { icon: ServerCog, text: 'Reliable uptime with direct exchange connectivity' },
  { icon: ShieldCheck, text: 'Your funds and data stay safe and protected' },
]

export function SecureSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24" aria-label="Secure and reliable trading">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Device image */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-primary/15 blur-3xl"
          />
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/secure-trading-devices.png"
              alt="Professional stock trading charts displayed on a laptop and a mobile phone"
              width={960}
              height={720}
              className="h-auto w-full"
            />
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-glow">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Secure and Reliable
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Secure and Reliable
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our platform offers secure and reliable trading, ensuring your
            investments are safe and protected.
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
        </div>
      </div>
    </section>
  )
}
