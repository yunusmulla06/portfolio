'use client'

import './globals.css'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { Saira } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Moahmmed Yunus | Frontend Developer',
  description: 'Portfolio of Moahmmed Yunus — Frontend Developer skilled in Next.js, React, and GSAP animations.',
}

const GA_MEASUREMENT_ID = 'G-4QJLZVCCVW'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname })
    }
  }, [pathname])

  return (
    <html lang="en">
      <body className={`${saira.className} bg-gray-950 text-gray-100 overflow-x-hidden`}>
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
            `,
          }}
        />

        {children}
      </body>
    </html>
  )
}
