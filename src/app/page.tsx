import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

export default function Home() {
  return (
    <main className="relative bg-gray-950">

      <Hero />

      <WorkExperience />

      <About />

      <Projects />

      <Skills />

      {/* Resume CTA */}
      <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-gray-800 bg-gray-900/40 px-6 py-8 md:px-10">

          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 uppercase tracking-[0.2em] mb-2">
              Resume
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Want to know more about my experience?
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              View my resume for a detailed overview of my experience, skills, and projects.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full transition-all duration-300 font-medium group"
          >
            View Resume

            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>
      </div>
      </section>

      <Contact />

      <Footer />

    </main>
  )
}