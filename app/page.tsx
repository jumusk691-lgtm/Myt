import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { TrustBanner } from '@/components/trust-banner'
import { FloatingPnlSection } from '@/components/floating-pnl-section'
import { AppScreensSection } from '@/components/app-screens-section'
import { FastWithdrawalSection } from '@/components/fast-withdrawal-section'
import { MoneySafetySection } from '@/components/money-safety-section'
import { HighLeverageSection } from '@/components/high-leverage-section'
import { FeatureGrid } from '@/components/feature-grid'
import { SecureSection } from '@/components/secure-section'
import { RegistrationSection } from '@/components/registration-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CommunityCtaSection } from '@/components/community-cta-section'
import { SiteFooter } from '@/components/site-footer'
import { StickyDownloadBar } from '@/components/sticky-download-bar'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustBanner />
        <FloatingPnlSection />
        <AppScreensSection />
        <FastWithdrawalSection />
        <MoneySafetySection />
        <HighLeverageSection />
        <FeatureGrid />
        <SecureSection />
        <RegistrationSection />
        <TestimonialsSection />
        <CommunityCtaSection />
      </main>
      <SiteFooter />
      {/* Extra bottom padding so content isn't hidden behind the mobile sticky bar */}
      <div className="h-20 md:hidden" aria-hidden="true" />
      <StickyDownloadBar />
    </div>
  )
}
