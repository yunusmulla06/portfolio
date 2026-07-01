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
    'Front-End Developer based in Dubai',
    'Next.js • React • Tailwind CSS',
    'Building fast & scalable Web Applications',
    'Open to opportunities • 30 days notice'
  ]

  
  const ctx = gsap.context(() => {
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    )

    const tl = gsap.timeline({ repeat: -1 })

    phrases.forEach((phrase) => {
      tl.to(descRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.4,
        ease: 'power2.in',
      })
        .set(descRef.current, { textContent: phrase })
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
    <Section ref={heroRef} className='min-h-screen max-sm:-mt-14'>
      <div className="float absolute top-20 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
      <div className="float absolute bottom-32 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
      <div className="float absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-400/20 rounded-full blur-lg"></div>

      <div className='md:mt-0 -mt-60 flex flex-col justify-center items-center'>
        <h1 className="hero-text text-3xl font-bold mb-4 relative z-10 text-center text-balance">
          Hi, I’m{' '}
          <span
            ref={nameRef}
            // className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 animate-gradient text-center text-balance"
            className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-[length:200%_auto] animate-gradient"
          >
            Mohammed Yunus
          </span>
        </h1>

        <p
          ref={descRef}
          className="hero-text text-lg md:text-xl text-gray-400 mb-6 relative z-10 max-w-3xl text-center text-balance"
        >
          {/* initial text will be replaced by gsap scramble */}
            Front-End Developer based in Dubai

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

      {/* <div ref={imgRef} className="absolute md:w-96 w-52 right-0 bottom-0">
        <Image src={elementPic} alt="img" className="" />
      </div> */}
      <div
        ref={imgRef}
        className="absolute bottom-0 md:right-10 z-10"
      >
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full scale-140" />

            <Image
              src={elementPic}
              alt="Mohammed Yunus"
              priority
              className="relative md:w-[520px] w-full h-auto drop-shadow-2xl select-none"
            />
          </div>
    </Section>
  )
}
