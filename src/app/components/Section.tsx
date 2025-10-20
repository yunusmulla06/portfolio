'use client'

import React, { forwardRef } from 'react'

type Props = {
  children?: React.ReactNode
  py?: '0' | '20'
  theme?: 'dark' | 'light'
  id?: string
  className?: string
}

const Section = forwardRef<HTMLDivElement, Props>(
  ({ children, theme = 'dark', py = '0', id, className }, ref) => {
    const themeClasses =
      theme === 'dark'
        ? 'bg-gray-950 text-gray-100'
        : 'bg-gray-100 text-gray-900'

    const paddingY =
      py === '20' ? 'py-20' : 'py-0'

    return (
      <section
        ref={ref}
        id={id}
        className={`flex relative w-full overflow-hidden md:px-20 px-6 ${themeClasses} ${paddingY} ${className || ''}`}
      >
        <div className="container mx-auto flex flex-col items-center justify-center">
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'
export default Section
