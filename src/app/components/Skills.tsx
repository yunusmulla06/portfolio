'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const skills = [
  {
    number: '01',
    title: 'Frontend Development',
    items: [
      'React',
      'Next.js',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
    ],
  },
  {
    number: '02',
    title: 'UI & Styling',
    items: [
      'Tailwind CSS',
      'Bootstrap',
      'Responsive Design',
      'Figma',
      'GSAP',
    ],
  },
  {
    number: '03',
    title: 'API & Integration',
    items: [
      'REST APIs',
      'API Integration',
      'Postman',
      'JWT Authentication',
    ],
  },
  {
    number: '04',
    title: 'E-commerce',
    items: [
      'Product & Catalog Management',
      'Product Variants',
      'Cart & Checkout',
      'Coupon Systems',
      'Payment Integration',
      'SEO',
    ],
  },
  {
    number: '05',
    title: 'CMS & Tools',
    items: [
      'WordPress',
      'ACF',
      'Elementor',
      'Shopify',
      'Git & GitHub',
      'Docker',
      'Vercel',
      'Netlify',
    ],
  },
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
            className="skill-card group break-inside-avoid bg-gray-900/60 border border-gray-800 rounded-2xl p-6 mb-6 hover:bg-gray-800/70 hover:border-gray-700 hover:-translate-y-1 transition-all duration-300 shadow-lg backdrop-blur-md"
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>

                <h3 className="text-xl font-semibold text-white mt-1">
                  {skill.title}
                </h3>
              </div>

            </div>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 bg-gray-800/80 text-gray-300 rounded-lg border border-gray-700/80"
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
