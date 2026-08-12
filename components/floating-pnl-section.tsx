import {
  Bot,
  Clock,
  Calendar,
  Settings,
  MessageCircle,
  Music,
  Camera,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type AppIcon = {
  icon: LucideIcon
  label: string
  className: string
}

const appIcons: AppIcon[] = [
  { icon: Bot, label: 'Assistant', className: 'bg-blue-500/20 text-blue-300' },
  { icon: Clock, label: 'Clock', className: 'bg-purple-500/20 text-purple-300' },
  { icon: Calendar, label: 'Calendar', className: 'bg-rose-500/20 text-rose-300' },
  { icon: Settings, label: 'Settings', className: 'bg-slate-500/20 text-slate-300' },
  { icon: MessageCircle, label: 'Chat', className: 'bg-emerald-500/20 text-emerald-300' },
  { icon: Music, label: 'Music', className: 'bg-orange-500/20 text-orange-300' },
  { icon: Camera, label: 'Camera', className: 'bg-cyan-500/20 text-cyan-300' },
  { icon: Phone, label: 'Phone', className: 'bg-teal-500/20 text-teal-300' },
]

export function FloatingPnlSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24" aria-label="Floating P&L widget">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-14">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-brand-glow">
            Floating Widget
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Floating P&amp;L Widget — Multitask Without Missing a Trade
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Trade executed? No need to keep the app open! Enjoy movies, chat on
            WhatsApp, or play games while tracking your Live P&amp;L directly on
            your screen.
          </p>
        </div>

        {/* Phone home screen mockup */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-[260px] rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl shadow-primary/20 sm:w-[300px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-primary/15 blur-3xl"
            />
            <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-border" aria-hidden="true" />

            {/* Home screen */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-secondary via-background to-background px-4 pb-5 pt-6">
              {/* status bar */}
              <div className="mb-6 flex items-center justify-between text-[11px] font-medium text-muted-foreground">
                <span>9:41</span>
                <span>MYT Home</span>
              </div>

              {/* Floating P&L overlay badge */}
              <div className="mb-8 flex justify-center">
                <div className="flex items-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/15 px-4 py-2.5 shadow-lg shadow-red-500/20 backdrop-blur">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/25 text-xs font-bold text-red-300">
                    P&amp;L
                  </span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                      Live P&amp;L
                    </p>
                    <p className="text-base font-bold text-red-400">-13,800.00</p>
                  </div>
                </div>
              </div>

              {/* app icon grid */}
              <div className="grid grid-cols-4 gap-x-3 gap-y-5">
                {appIcons.map((app) => {
                  const Icon = app.icon
                  return (
                    <div key={app.label} className="flex flex-col items-center gap-1.5">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${app.className}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="text-[9px] text-muted-foreground">{app.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
