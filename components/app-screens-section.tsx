import {
  BarChart3,
  Wallet,
  User,
  Search,
  LineChart,
} from 'lucide-react'

type Position = {
  symbol: string
  exchange: string
  value: string
  tone: 'up' | 'down' | 'neutral'
}

const positions: Position[] = [
  { symbol: 'BANKNIFTY25AUG26FUT', exchange: 'NFO', value: '₹56,915.00', tone: 'neutral' },
  { symbol: 'CRUDEOILM21SEP26FUT', exchange: 'MCX', value: '-₹8,581.00', tone: 'down' },
  { symbol: 'GOLDM05AUG26FUT', exchange: 'MCX', value: '+₹1,42,625.00', tone: 'up' },
  { symbol: 'MIDCPNIFTY25AUG26FUT', exchange: 'NFO', value: '₹14,479.95', tone: 'neutral' },
  { symbol: 'NIFTY04AUG2621700CE', exchange: 'NFO', value: '₹2,300.90', tone: 'neutral' },
  { symbol: 'NIFTY25AUG26FUT', exchange: 'NFO', value: '₹23,950.00', tone: 'neutral' },
]

type OptionRow = {
  symbol: string
  type: 'CALL' | 'PUT'
}

const optionResults: OptionRow[] = [
  { symbol: 'NIFTY04AUG2621600CE', type: 'CALL' },
  { symbol: 'NIFTY04AUG2621600PE', type: 'PUT' },
  { symbol: 'NIFTY04AUG2621650CE', type: 'CALL' },
  { symbol: 'NIFTY04AUG2621650PE', type: 'PUT' },
]

function toneClass(tone: Position['tone']) {
  if (tone === 'up') return 'text-emerald-400'
  if (tone === 'down') return 'text-red-400'
  return 'text-foreground'
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[320px] rounded-[2.25rem] border border-border bg-card p-2.5 shadow-2xl shadow-primary/10">
      <div className="mx-auto mb-2 h-1.5 w-14 rounded-full bg-border" aria-hidden="true" />
      <div className="overflow-hidden rounded-[1.75rem] bg-background">{children}</div>
    </div>
  )
}

export function AppScreensSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24" aria-label="Live app screens">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A powerful trading terminal in your pocket
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Manage live positions and search the full option chain with a clean,
            lightning-fast interface built for real traders.
          </p>
        </div>

        <div className="mt-12 grid justify-items-center gap-8 md:grid-cols-2">
          {/* CARD 1 — Positions */}
          <PhoneShell>
            {/* header */}
            <div className="border-b border-border/60 bg-secondary/40 px-4 py-3">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">
                Total Equity
              </p>
              <p className="text-xl font-bold text-foreground">₹22,486.55</p>
              <div className="mt-2 flex gap-3 text-[11px]">
                <span className="text-muted-foreground">
                  NIFTY <span className="font-semibold text-emerald-400">23869.60</span>
                </span>
                <span className="text-muted-foreground">
                  SENSEX <span className="font-semibold text-emerald-400">64181.49</span>
                </span>
              </div>
            </div>

            {/* positions list */}
            <ul className="divide-y divide-border/50">
              {positions.map((p) => (
                <li
                  key={p.symbol}
                  className="flex items-center justify-between gap-2 px-4 py-2.5"
                >
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-foreground">
                      {p.symbol}
                    </p>
                    <span className="text-[10px] uppercase text-muted-foreground">
                      {p.exchange}
                    </span>
                  </div>
                  <span className={`shrink-0 text-xs font-semibold ${toneClass(p.tone)}`}>
                    {p.value}
                  </span>
                </li>
              ))}
            </ul>

            {/* bottom nav */}
            <nav className="grid grid-cols-4 border-t border-border/60 bg-secondary/40 py-2 text-[10px]">
              {[
                { icon: LineChart, label: 'Market', active: false },
                { icon: BarChart3, label: 'Positions', active: true },
                { icon: Wallet, label: 'Funds', active: false },
                { icon: User, label: 'Profile', active: false },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.label}
                    className={`flex flex-col items-center gap-1 ${
                      item.active ? 'text-brand-glow' : 'text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {item.label}
                  </div>
                )
              })}
            </nav>
          </PhoneShell>

          {/* CARD 2 — Option Chain / Search */}
          <PhoneShell>
            {/* search bar */}
            <div className="border-b border-border/60 px-4 py-3">
              <p className="mb-2 text-[10px] uppercase tracking-wide text-muted-foreground">
                Search Instruments
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-input bg-secondary/50 px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="text-sm text-foreground">nifty</span>
                <span className="ml-auto h-4 w-px animate-pulse bg-brand-glow" aria-hidden="true" />
              </div>
            </div>

            {/* results */}
            <ul className="divide-y divide-border/50">
              {optionResults.map((o) => (
                <li key={o.symbol} className="flex items-center justify-between gap-2 px-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-medium text-foreground">{o.symbol}</p>
                    <span className="text-[10px] text-muted-foreground">NSE • Lot: 65</span>
                  </div>
                  <span
                    className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-bold ${
                      o.type === 'CALL'
                        ? 'bg-emerald-500/15 text-emerald-400'
                        : 'bg-red-500/15 text-red-400'
                    }`}
                  >
                    {o.type}
                  </span>
                </li>
              ))}
            </ul>
            <div className="px-4 py-3 text-center text-[10px] text-muted-foreground">
              Showing 4 of 128 results
            </div>
          </PhoneShell>
        </div>
      </div>
    </section>
  )
}
