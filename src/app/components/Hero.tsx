'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import Link from 'next/link'
import Image from 'next/image'

import elementPic from '../../../public/animated.png'
import Section from './Section'

gsap.registerPlugin(ScrambleTextPlugin)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  const phrases = [
    'Front-End Developer',
    'Next.js • React • GSAP • Tailwind CSS',
    'Learning Full Stack (Node.js + MongoDB)',
    'Building Animated & Scalable Web Apps'
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name animation
      gsap.to(nameRef.current, {
        duration: 5,
        scrambleText: {
          text: 'Moahmmed Yunus',
          chars: ' X O',
          revealDelay: 0.5,
          speed: 0.8,
        },
        ease: 'power3.inOut',
      })

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
      phrases.forEach(phrase => {
        tl.to(descRef.current, {
          duration: 3,
          scrambleText: {
            text: phrase,
            chars: 'XO •',
            speed: 0.8,
          },
          ease: 'power1.inOut',
        }).to(descRef.current, { duration: 1, opacity: 0, ease: 'power1.inOut' })
        .set(descRef.current, { opacity: 1 }) 
      })

      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      })

      gsap.fromTo(
        imgRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 10, ease: 'power2.out' }
      )

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
  }, [phrases])

  return (
    <Section ref={heroRef} className='min-h-screen'>
      <div className="float absolute top-20 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
      <div className="float absolute bottom-32 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="float absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-400/20 rounded-full blur-lg"></div>

      <div className='md:mt-0 -mt-60 flex flex-col justify-center items-center'>
        <h1 className="hero-text text-5xl md:text-6xl font-bold mb-4 relative z-10 text-center text-balance">
          Hi, I’m{' '}
          <span
            ref={nameRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 animate-gradient text-center text-balance"
          >
            Y
          </span>
        </h1>

        <p
          ref={descRef}
          className="hero-text text-lg md:text-xl text-gray-400 mb-6 relative z-10 max-w-3xl text-center text-balance"
        >
          {/* initial text will be replaced by gsap scramble */}
        </p>

        <Link
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium group"
        >
          Resume
          <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
            ➔
          </span>
        </Link>
      </div>

      <div ref={imgRef} className="absolute md:w-96 w-52 right-0 bottom-0">
        <Image src={elementPic} alt="img" className="" />
      </div>
    </Section>
  )
}
