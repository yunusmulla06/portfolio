'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'

const skills = [
  {
    number: '01',
    title: 'Frontend Development',
    featured: true,
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
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
      'GSAP',
      'Swiper.js',
      'Figma',
    ],
  },
  {
    number: '03',
    title: 'API & Backend Integration',
    items: [
      'REST APIs',
      'API Integration',
      'JWT Authentication',
      'Postman',
      'MongoDB',
    ],
  },
  {
    number: '04',
    title: 'E-commerce Development',
    items: [
      'Product Catalogs',
      'Product Variants',
      'Cart & Checkout',
      'Coupon Systems',
      'Payment Integration',
      'SEO',
      'Google Merchant Center',
    ],
  },
  {
    number: '05',
    title: 'CMS & E-commerce Platforms',
    items: [
      'WordPress',
      'WooCommerce',
      'ACF',
      'Elementor',
      'Shopify',
    ],
  },
  {
    number: '06',
    title: 'Tools & Deployment',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'Vercel',
      'Netlify',
      'VS Code',
    ],
  },
]

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          clearProps: 'transform',
        }
      )
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={skillsRef} id="skills" py="20">
      <div className="w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
            My Expertise
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Technologies and tools I use to build responsive web applications,
            e-commerce platforms, and production-ready frontend experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.number}
              className={`skill-card group relative overflow-hidden
                bg-gray-900/60
                border border-gray-800
                rounded-2xl
                p-6
                backdrop-blur-md
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-gray-800/70
                hover:border-gray-700
                ${
                  skill.featured
                    ? 'md:col-span-2 lg:col-span-2'
                    : ''
                }`}
            >
              {/* Subtle Background Number */}
              <span
                className="absolute -right-3 -top-7 text-[100px] font-bold
                  text-white/[0.025] leading-none select-none
                  transition-all duration-300
                  group-hover:text-white/[0.05]"
              >
                {skill.number}
              </span>

              {/* Card Header */}
              <div className="relative flex items-start gap-4 mb-6">
                <div
                  className="flex items-center justify-center
                    min-w-10 h-10
                    rounded-xl
                    bg-gray-800
                    border border-gray-700
                    text-xs font-semibold
                    text-gray-400
                    group-hover:text-white
                    group-hover:border-gray-600
                    transition-all duration-300"
                >
                  {skill.number}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {skill.title}
                  </h3>

                  {skill.featured && (
                    <span className="inline-block mt-1 text-xs text-gray-500">
                      Core Technologies
                    </span>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {skill.items.map((item, index) => {
                  const isCore =
                    skill.number === '01' &&
                    ['React', 'Next.js', 'TypeScript'].includes(item)

                  return (
                    <span
                      key={index}
                      className={`
                        text-xs sm:text-sm
                        px-3 py-1.5
                        rounded-lg
                        border
                        transition-all duration-200
                        ${
                          isCore
                            ? 'bg-gray-700/80 text-white border-gray-600 font-medium'
                            : 'bg-gray-800/70 text-gray-300 border-gray-700/80'
                        }
                        group-hover:border-gray-600
                      `}
                    >
                      {item}
                    </span>
                  )
                })}
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 w-0 h-px
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