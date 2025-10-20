'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import elementPic from '../../../public/animated.png'
import Section from './Section'

gsap.registerPlugin(ScrambleTextPlugin)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
      })

      gsap.to(nameRef.current, {
        duration: 5,
        scrambleText: {
          text: 'Moahmmed Yunus',
          chars: ' X O',
          revealDelay: 0.5,
          speed: 0.8,
        },
        repeat: -1,
        yoyo: true,
        ease: 'power3.inOut',
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
  }, [])

  return (
    <Section
      ref={heroRef}
      className='min-h-screen'
    >
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

        <p className="hero-text text-lg md:text-xl text-gray-400 mb-6 relative z-10 max-w-3xl text-center text-balance">
          Front-End Developer | Next.js • React • GSAP • Tailwind CSS | Learning Full Stack (Node.js + MongoDB) | Building Animated & Scalable Web Apps
        </p>

        {/* <Link
          href="#projects"
          className="flex items-center gap-2 arrow-animate-btn bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 relative z-10"
        >
          View My Work <ArrowRight className="w-5 h-5 arrow-animate" />
        </Link> */}

        {/* <div className="absolute md:right-10 right-5 md:bottom-10 bottom-8"> */}
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
      {/* </div> */}

      </div>


      <div ref={imgRef} className="absolute md:w-96 w-52 right-0 bottom-0">
        <Image src={elementPic} alt="img" className="" />
      </div>
    </Section>
  )
}
