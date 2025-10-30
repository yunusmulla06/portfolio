import './globals.css'
import type { ReactNode } from 'react'
import Script from 'next/script'
import { Saira } from 'next/font/google'
import GA from './GA' 
const saira = Saira({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: 'Moahmmed Yunus | Frontend Developer',
  description: 'Portfolio of Moahmmed Yunus — Frontend Developer skilled in Next.js, React, and GSAP animations.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${saira.className} bg-gray-950 text-gray-100 overflow-x-hidden`}>
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4QJLZVCCVW"
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4QJLZVCCVW', { page_path: window.location.pathname });
            `,
          }}
        />

        <GA />

        {children}
      </body>
    </html>
  )
}
