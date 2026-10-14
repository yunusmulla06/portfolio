'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const experiences = [
  {
    number: '01',
    role: 'Front-End Developer',
    company: '361° Sport | GlobalFeet',
    duration: 'Nov 2025 – Present',
    description: [
      'Develop and maintain the company’s production e-commerce website using Next.js, React, and TypeScript.',
      'Build and improve product listing, product variants, cart, checkout, coupon, and other customer-facing e-commerce features.',
      'Integrate and work with REST APIs for products, customers, orders, authentication, checkout, and other platform functionality.',
      'Optimize website performance, responsive UI, SEO, and overall user experience across desktop and mobile.',
      'Manage product catalogs, inventory-related updates, SEO content, and marketplace listings across Amazon and Noon.',
      'Perform QA testing, troubleshoot frontend and integration issues, and coordinate with backend developers and internal teams to resolve production issues.',
    ],
    tech: [
      'Next.js',
      'React',
      'TypeScript',
      'REST APIs',
      'Tailwind CSS',
      'SEO',
      'E-commerce',
    ],
    current: true,
  },
  {
    number: '02',
    role: 'Front-End Developer',
    company: 'Oro Media Lab',
    duration: 'Oct 2023 – Jul 2025',
    description: [
      'Developed responsive and production-ready websites using React and Next.js.',
      'Converted Figma designs into responsive, reusable, and pixel-focused frontend interfaces.',
      'Built responsive layouts and interactive UI components using modern HTML, CSS, JavaScript, and Tailwind CSS.',
      'Customized and developed WordPress websites using ACF and Elementor based on project requirements.',
      'Worked with designers and backend developers to implement new features and maintain existing websites.',
      'Troubleshot responsive, cross-browser, UI, and frontend issues across different devices and browsers.',
    ],
    tech: [
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'WordPress',
      'ACF',
      'Elementor',
    ],
    current: false,
  },
]

export default function WorkExperience() {
  const expRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-card',
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          clearProps: 'transform',
        }
      )
    }, expRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={expRef} id="experience" py="20">
      <div className="w-full max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
            Career
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Work Experience
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Experience building modern web applications, e-commerce platforms,
            and responsive digital experiences.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.number}
              className="experience-card group relative overflow-hidden
                flex flex-col
                bg-gray-900/60
                border border-gray-800
                rounded-2xl
                p-6 sm:p-7
                shadow-lg
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-gray-800/70
                hover:border-gray-700"
            >
              {/* Number */}
              <span
                className="absolute right-4 top-2
                  text-8xl font-bold
                  text-white/[0.025]
                  leading-none
                  select-none"
              >
                {exp.number}
              </span>

              {/* Current Role */}
              {exp.current && (
                <div className="relative flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-white" />

                  <span className="text-xs uppercase tracking-wider text-gray-500">
                    Current Role
                  </span>
                </div>
              )}

              {/* Role */}
              <h3 className="relative text-xl sm:text-2xl font-semibold text-white">
                {exp.role}
              </h3>

              {/* Company */}
              <p className="relative text-gray-400 mt-1">
                {exp.company}
              </p>

              {/* Duration */}
              <p className="relative text-gray-500 text-sm mt-1 mb-6">
                {exp.duration}
              </p>

              {/* Responsibilities */}
              <ul className="relative space-y-3 mb-7">
                {exp.description.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-300 leading-6"
                  >
                    <span className="mt-[9px] w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="relative flex flex-wrap gap-2 mt-auto pt-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1.5
                      bg-gray-800/80
                      text-gray-300
                      rounded-lg
                      border border-gray-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0
                  w-0 h-px
                  bg-white/30
                  transition-all duration-500
                  group-hover:w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}