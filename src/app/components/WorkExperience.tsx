'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const experiences = [
  {
    role: 'Front-End Developer',
    company: '361° Sport | GlobalFeet',
    duration: 'Nov 2025 – Present',
    description: 'Developing and maintaining Next.js-based web applications, focusing on UI performance, scalable component architecture, and responsive design for e-commerce experiences.',
  },
  {
    role: 'Front-End Developer',
    company: 'Freelance & Personal Projects',
    duration: '2023 – Present',
    description: 'Delivered responsive and high-performance websites using Next.js and Tailwind CSS, improving SEO, load speed, and user experience across devices.',
  },
  {
    role: 'Front-End Developer',
    company: 'Oro Media Lab',
    duration: 'Oct 2023 – July 2025',
    description: 'Built responsive web applications using React and Next.js, enhancing UI performance and implementing smooth animations for better user engagement.',
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
        clearProps: 'all',
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
            className="experience-card bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-800/70 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md cursor-default"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-2">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
            <p className="text-gray-300 text-sm">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Next.js', 'React', 'Tailwind'].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
