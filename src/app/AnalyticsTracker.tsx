'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-4QJLZVCCVW'

interface AnalyticsTrackerProps {
  id?: string
}

export default function AnalyticsTracker({ id }: AnalyticsTrackerProps) {
  const pathname = usePathname()

  useEffect(() => {
    const w: any = window
    if (typeof w.gtag !== 'undefined') {
      w.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return <div id={id} style={{ display: 'none' }} />
}
