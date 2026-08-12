import { ShieldCheck } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <p className="flex items-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-brand-glow" aria-hidden="true" />
          MYT Trading Platform • Safe &amp; Verified APK
        </p>
      </div>
    </footer>
  )
}
