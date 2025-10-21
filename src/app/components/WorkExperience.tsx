'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const experiences = [
  {
    role: 'Front-End Developer',
    company: 'Freelance & Personal Projects',
    duration: '2023 – Present',
    description: 'Building responsive websites with Next.js, React, Tailwind CSS, adding micro-interactions with GSAP, and optimizing for performance & SEO.',
  },
  {
    role: 'Front-End Developer',
    company: 'Oro Media Lab',
    duration: '2021 – 2023',
    description: 'Started with HTML, CSS, JS; moved to WordPress custom themes; transitioned to React & Next.js; worked on UI animations and responsive design.',
  },
]

export default function WorkExperience() {
  const expRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.experience-card', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.out',
        stagger: 0.3,
      })
    }, expRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={expRef} id="experience" py="20">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Work Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="experience-card bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-md cursor-default"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-2">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
