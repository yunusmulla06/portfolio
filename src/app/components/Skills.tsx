'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const skills = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    title: 'UI & Animation',
    items: [
      'GSAP',
      'Responsive Design',
      'Figma',
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Authentication (JWT)',
    ],
  },
  {
    title: 'CMS & E-commerce',
    items: [
      'WordPress (ACF, Elementor)',
      'Shopify Customization',
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      'Git & GitHub',
      'Docker',
      'Postman',
      'Vercel & Netlify',
    ],
  },
  {
  title: 'E-commerce Experience',
    items: [
      'Product UI Development',
      'Performance Optimization',
      'Responsive Product Pages',
      'Cart & Checkout UI',
    ],
  }
]



export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          stagger: 0.2,
          clearProps: 'transform',
        }
      )
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={skillsRef} id="skills" py="20">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Skills & Technologies
      </h2>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card break-inside-avoid bg-gray-900/60 border border-gray-800 rounded-xl p-6 mb-6 hover:bg-gray-800/70 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-md"
            // className="skill-card break-inside-avoid bg-gray-900/60 border border-gray-800 rounded-xl p-6 mb-6 hover:bg-gray-800/70 transition-all duration-300 shadow-lg backdrop-blur-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-md border border-gray-700 cursor-none"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
