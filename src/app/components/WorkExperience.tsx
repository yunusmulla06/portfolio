'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const experiences = [
  {
    role: 'Front-End Developer',
    company: '361° Sport | GlobalFeet',
    duration: 'Nov 2025 – Present',
    description:
      'Worked on the day-to-day development and management of a production e-commerce website, contributing to new features, website improvements, API integrations, checkout and payment functionality, coupon systems, product and inventory management, SEO, performance optimization, and quality testing. Also handled product listings and marketplace operations on Amazon while coordinating with external developers and internal teams to resolve issues and improve the overall customer experience.',
    tech: ['Next.js', 'React', 'TypeScript', 'REST APIs', 'SEO', 'E-commerce'],
  },
  {
    role: 'Front-End Developer',
    company: 'Oro Media Lab',
    duration: 'Oct 2023 – July 2025',
    description:
      'Developed responsive websites using React and Next.js, converting Figma designs into production-ready interfaces. Customized WordPress websites using ACF and Elementor, worked with designers and backend developers, and resolved cross-browser and UI issues.',
    tech: ['React', 'Next.js', 'WordPress', 'ACF', 'Elementor', 'Tailwind CSS'],
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
            className="flex flex-col experience-card bg-gray-900/60 border border-gray-800 rounded-xl p-6 shadow-lg hover:bg-gray-800/70 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md cursor-default"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-2">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
            <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700"
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
