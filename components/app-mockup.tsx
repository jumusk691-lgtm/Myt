import { ArrowUpRight, TrendingUp } from 'lucide-react'

type Candle = {
  x: number
  open: number
  close: number
  high: number
  low: number
}

// Deterministic candlestick data (mostly bullish / green)
const candles: Candle[] = [
  { x: 8, open: 90, close: 78, high: 74, low: 94 },
  { x: 22, open: 80, close: 66, high: 60, low: 84 },
  { x: 36, open: 68, close: 72, high: 62, low: 78 },
  { x: 50, open: 70, close: 54, high: 48, low: 74 },
  { x: 64, open: 56, close: 44, high: 40, low: 60 },
  { x: 78, open: 46, close: 52, high: 42, low: 58 },
  { x: 92, open: 52, close: 36, high: 30, low: 56 },
  { x: 106, open: 38, close: 28, high: 22, low: 44 },
  { x: 120, open: 30, close: 40, high: 26, low: 46 },
  { x: 134, open: 40, close: 22, high: 16, low: 44 },
  { x: 148, open: 24, close: 30, high: 18, low: 36 },
  { x: 162, open: 32, close: 18, high: 12, low: 38 },
]

export function AppMockup() {
  return (
    <div className="mt-14 flex justify-center">
      {/* Phone frame */}
      <div className="relative w-[280px] rounded-[2.5rem] border border-border bg-card p-3 shadow-2xl shadow-primary/20 sm:w-[320px]">
        {/* Glow behind phone */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-primary/20 blur-3xl"
        />

        {/* Notch */}
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-border" aria-hidden="true" />

        {/* Screen */}
        <div className="overflow-hidden rounded-[1.75rem] bg-background">
          {/* App top bar */}
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <TrendingUp className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">NIFTY 50</span>
            </div>
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-400">
              <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              +1.24%
            </span>
          </div>

          {/* Price + tabs */}
          <div className="px-4 pt-3">
            <p className="text-2xl font-bold tracking-tight text-foreground">
              23,842.65
            </p>
            <div className="mt-1 flex items-center gap-3 text-xs">
              <span className="font-medium text-emerald-400">+291.35 today</span>
              <span className="text-muted-foreground">BANKNIFTY 51,204.10</span>
            </div>
          </div>

          {/* Candlestick chart */}
          <div className="px-3 pb-2 pt-3">
            <svg
              viewBox="0 0 176 110"
              className="h-32 w-full"
              role="img"
              aria-label="Live NIFTY candlestick chart trending upward"
            >
              {/* grid lines */}
              {[20, 45, 70, 95].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="176"
                  y1={y}
                  y2={y}
                  stroke="currentColor"
                  className="text-border"
                  strokeWidth="0.5"
                />
              ))}
              {candles.map((c, i) => {
                const bullish = c.close < c.open
                const color = bullish ? '#34d399' : '#f87171'
                const bodyTop = Math.min(c.open, c.close)
                const bodyH = Math.max(Math.abs(c.open - c.close), 2)
                return (
                  <g key={i}>
                    <line
                      x1={c.x}
                      x2={c.x}
                      y1={c.high}
                      y2={c.low}
                      stroke={color}
                      strokeWidth="1"
                    />
                    <rect
                      x={c.x - 3.5}
                      y={bodyTop}
                      width="7"
                      height={bodyH}
                      rx="1"
                      fill={color}
                    />
                  </g>
                )
              })}
            </svg>
          </div>

          {/* BUY / SELL buttons */}
          <div className="grid grid-cols-2 gap-2 px-3 pb-4 pt-1">
            <button
              type="button"
              className="rounded-lg bg-emerald-500 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30"
            >
              BUY
            </button>
            <button
              type="button"
              className="rounded-lg bg-red-500 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/30"
            >
              SELL
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
