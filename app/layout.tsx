import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'MYT Trading — Zero Brokerage, Fast & Secure Trading',
  description:
    'Trade on NSE/BSE and MCX with zero brokerage fees, ultra-fast execution speeds, and 100% secure, instant access. Download the MYT Trading app today.',
  generator: 'v0.app',
  keywords: [
    'MYT Trading',
    'zero brokerage',
    'NSE',
    'BSE',
    'MCX',
    'trading app',
    'fast execution',
    'secure trading',
  ],
  // 👇 यहाँ आइकॉन (Favicon) जोड़ा गया है
  icons: {
    icon: '/logo.png', // सुनिश्चित करें कि आपकी यह इमेज 'public' फोल्डर के अंदर मौजूद हो
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
