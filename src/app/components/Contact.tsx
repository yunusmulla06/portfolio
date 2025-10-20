'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      })

      gsap.to('.float', {
        y: '+=15',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    }, contactRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section py='20'>
      <div className="float absolute top-10 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl z-0"></div>

      <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
      <p className="text-gray-400 mb-6 text-center max-w-xl">
        I’m open to Front-End opportunities and freelance projects.
      </p>

      <a
        href="mailto:mullayunus549@gmail.com"
        className="relative z-10 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300"
      >
        Contact Me
      </a>
    </Section>

  )
}
