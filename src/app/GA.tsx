'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

const GA_MEASUREMENT_ID = 'G-4QJLZVCCVW'

export default function GA() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, { page_path: pathname })
    }
  }, [pathname])

  return null
}
