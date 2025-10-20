import './globals.css'
import type { ReactNode } from 'react'

import { Saira } from 'next/font/google'

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
        {children}
      </body>
    </html>
  )
}
