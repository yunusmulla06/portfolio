import Link from 'next/link'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main className='relative'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />


      <div className="absolute md:right-10 right-5 md:bottom-10 bottom-8">
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
    </main>
  )
}
