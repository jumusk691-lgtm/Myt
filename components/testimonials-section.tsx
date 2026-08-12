import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'The high leverage and fast execution have transformed my trading strategy.',
    name: 'Aarav Mehta',
    role: 'Options Trader',
    avatar: '/avatars/trader-5.png',
  },
  {
    quote: 'MYT Trading has transformed my trading experience.',
    name: 'Priya Nair',
    role: 'Intraday Trader',
    avatar: '/avatars/trader-2.png',
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24" aria-label="Testimonials">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by thousands of traders
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote className="h-7 w-7 text-brand-glow/70" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 text-pretty text-lg font-medium leading-relaxed text-card-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar || '/placeholder.svg'}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <figcaption>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
                <span className="ml-auto flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
