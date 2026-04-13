'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Section from './Section'
import { Mail, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [selectedForm, setSelectedForm] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)
    const action = form.action

    try {
      const response = await fetch(action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        toast.success('✅ Message sent successfully!')
        form.reset()
        setSelectedForm('')
      } else {
        toast.error('❌ Failed to send message. Try again.')
      }
    } catch {
      toast.error('⚠️ Something went wrong.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderForm = () => {
    const formProps = {
      onSubmit: handleSubmit,
      method: 'POST',
      action: 'https://formspree.io/f/xvgdobky',
      className:
        'mt-6 space-y-4 max-w-lg mx-auto text-left bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/10',
    }

    const inputClass =
      'w-full border border-gray-300 dark:border-white/20 bg-transparent text-sm p-3 rounded-lg focus:ring-2 focus:ring-black dark:focus:ring-white outline-none transition'

    const buttonClass =
      'w-full bg-black text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed'

    switch (selectedForm) {
      case 'hire':
        return (
          <form {...formProps}>
            <div className='flex flex-col gap-2'>
              <label>Your Name</label>
              <input type="text" name="name" required className={inputClass} />
            </div>

            <div className='flex flex-col gap-2'>
              <label>Your Email</label>
              <input type="email" name="email" required className={inputClass} />
            </div>

            <div className='flex flex-col gap-2'>
              <label>Position / Role</label>
              <input type="text" name="position" className={inputClass} />
            </div>

            <div className='flex flex-col gap-2'>
              <label>Message</label>
              <textarea name="message" rows={4} className={inputClass}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={buttonClass}>
              {isSubmitting ? 'Submitting...' : 'Send'}
            </button>
          </form>
        )

      case 'project':
        return (
          <form {...formProps}>
            <div className='flex flex-col gap-2'>
              <label>Your Name</label>
              <input type="text" name="name" required className={inputClass} />
            </div>

            <div className='flex flex-col gap-2'>
              <label>Your Email</label>
              <input type="email" name="email" required className={inputClass} />
            </div>

            <div className='flex flex-col gap-2'>
              <label>Project Type</label>
              <input type="text" name="projectType" className={inputClass} />
            </div>

            <div className='flex flex-col gap-2'>
              <label>Project Details</label>
              <textarea name="details" rows={4} className={inputClass}></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className={buttonClass}>
              {isSubmitting ? 'Submitting...' : 'Send'}
            </button>
          </form>
        )

      default:
        return null
    }
  }

  return (
    <Section id="contact" className="py-20 text-center relative">
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar />

      <div className="max-w-2xl mx-auto px-6">
        {/* 🔥 Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Let’s Work Together
        </h2>

        {/* 🔥 Description */}
        <p className="text-gray-400 mb-4 text-sm md:text-base max-w-xl mx-auto">
          Whether you’re looking to collaborate, hire, or discuss a project — I’d love to hear from you.
        </p>

        {/* 🔥 Availability */}
        <p className="text-gray-500 text-sm mb-5">
          📍 Dubai, UAE • 🟢 Open to Opportunities • ⏳ 30 Days Notice
        </p>

        {/* 🔥 Contact Pills */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <a
            href="mailto:mullayunus449@gmail.com"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition"
          >
            <Mail size={14} />
            Email
          </a>

          <a
            href="https://wa.me/+971502202462"
            target="_blank"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* 🔥 Buttons */}
        {!selectedForm ? (
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setSelectedForm('hire')}
              className="px-6 py-3 border rounded-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:scale-110"
            >
              Hire Me
            </button>

            <button
              onClick={() => setSelectedForm('project')}
              className="px-6 py-3 border rounded-xl hover:bg-black hover:text-white transition-all duration-300 cursor-pointer hover:scale-110"
            >
              Project Inquiry
            </button>
          </div>
        ) : (
          <>
            <button
              onClick={() => setSelectedForm('')}
              className="text-sm underline mb-4 hover:text-gray-500 transition"
            >
              ← Back
            </button>
            {renderForm()}
          </>
        )}
      </div>
    </Section>
  )
}