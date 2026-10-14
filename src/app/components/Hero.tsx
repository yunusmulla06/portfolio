'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

import elementPic from '../../../public/hero.png'
import Section from './Section'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const phrases = [
      'Frontend Developer specializing in React & Next.js',
      'Building responsive and high-performance web applications',
      'E-commerce • REST APIs • SEO • Performance',
      'React • Next.js • TypeScript • WordPress',
    ]

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      )

      const tl = gsap.timeline({ repeat: -1 })

      phrases.forEach((phrase) => {
        tl.to(descRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.4,
          ease: 'power2.in',
        })
          .set(descRef.current, {
            textContent: phrase,
          })
          .to(descRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          })
          .to(descRef.current, {
            delay: 2,
          })
      })

      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      })

      gsap.to('.float', {
        y: '+=20',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={heroRef} className="min-h-screen max-sm:-mt-14">

      {/* Background elements - unchanged */}
      <div className="float absolute top-20 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl" />
      <div className="float absolute bottom-32 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
      <div className="float absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-400/20 rounded-full blur-lg" />

      {/* Hero Content */}
      <div className="relative z-20 md:mt-0 -mt-60 flex flex-col justify-center items-center">

        <h1 className="hero-text text-3xl font-bold mb-4 relative z-10 text-center text-balance">
          Hi, I’m{' '}
          <span
            ref={nameRef}
            className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient"
          >
            Mohammed Yunus
          </span>
        </h1>

        <p
          ref={descRef}
          className="hero-text text-lg md:text-xl text-gray-400 mb-6 relative z-10 max-w-3xl text-center text-balance"
        >
          Frontend Developer specializing in React & Next.js
        </p>

        <div className="hero-text flex flex-wrap justify-center gap-3">

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium group"
          >
            View Resume

            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-full transition-all duration-300 font-medium"
          >
            Contact Me
          </a>

        </div>
      </div>

      {/* IMAGE SIDE — LEFT EXACTLY AS PROVIDED */}
      <div
        ref={imgRef}
        className="absolute bottom-0 right-0 z-10"
      >
        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-140" />

        <Image
          src={elementPic}
          alt="Mohammed Yunus"
          priority
          className="relative md:w-[520px] w-full h-auto drop-shadow-2xl select-none [mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]"
        />
      </div>

    </Section>
  )
}