'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Section from './Section'
import { Mail, MessageCircle } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const position = String(data.get('position') || '').trim()
    const message = String(data.get('message') || '').trim()

    const newErrors: Record<string, string> = {}

    if (!name) {
      newErrors.name = 'Name is required'
    }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!position) {
      newErrors.position = 'Job position is required'
    }

    if (!message) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        toast.success('Message sent successfully!')
        form.reset()
        setErrors({})
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[field]
        return updated
      })
    }
  }

  return (
    <Section
      id="contact"
      className="py-20 text-center relative"
    >
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
      />

      <div className="max-w-2xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
          Let’s Connect
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-4 text-sm md:text-base max-w-xl mx-auto">
          I’m currently looking for Frontend Developer opportunities in Dubai
          and across the UAE. If you’re hiring for a React or Next.js role,
          I’d be happy to connect.
        </p>

        {/* Availability */}
        <p className="text-gray-500 text-sm mb-6">
          📍 Dubai, UAE • 🟢 Open to Opportunities • ⏳ 30 Days Notice
        </p>

        {/* Contact Links */}
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
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm px-4 py-2 bg-gray-800 border border-gray-700 rounded-full hover:bg-gray-700 transition"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>

        {/* Job Contact Form */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://formspree.io/f/xvgdobky"
          className="mt-6 space-y-4 max-w-lg mx-auto text-left bg-white/5 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/10"
        >

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-sm text-gray-300"
            >
              Your Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              onChange={() => clearError('name')}
              className={`w-full border ${
                errors.name
                  ? 'border-red-500/70'
                  : 'border-white/20'
              } bg-transparent text-sm p-3 rounded-lg focus:ring-2 ${
                errors.name
                  ? 'focus:ring-red-500'
                  : 'focus:ring-white'
              } outline-none transition`}
            />

            {errors.name && (
              <p className="text-red-400 text-xs">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm text-gray-300"
            >
              Your Email
            </label>

            <input
              id="email"
              type="text"
              name="email"
              onChange={() => clearError('email')}
              className={`w-full border ${
                errors.email
                  ? 'border-red-500/70'
                  : 'border-white/20'
              } bg-transparent text-sm p-3 rounded-lg focus:ring-2 ${
                errors.email
                  ? 'focus:ring-red-500'
                  : 'focus:ring-white'
              } outline-none transition`}
            />

            {errors.email && (
              <p className="text-red-400 text-xs">
                {errors.email}
              </p>
            )}
          </div>

          {/* Job Position */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="position"
              className="text-sm text-gray-300"
            >
              Job Position
            </label>

            <input
              id="position"
              type="text"
              name="position"
              placeholder="e.g. Frontend Developer"
              onChange={() => clearError('position')}
              className={`w-full border ${
                errors.position
                  ? 'border-red-500/70'
                  : 'border-white/20'
              } bg-transparent text-sm p-3 rounded-lg focus:ring-2 ${
                errors.position
                  ? 'focus:ring-red-500'
                  : 'focus:ring-white'
              } outline-none transition`}
            />

            {errors.position && (
              <p className="text-red-400 text-xs">
                {errors.position}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about the opportunity..."
              onChange={() => clearError('message')}
              className={`w-full border ${
                errors.message
                  ? 'border-red-500/70'
                  : 'border-white/20'
              } bg-transparent text-sm p-3 rounded-lg focus:ring-2 ${
                errors.message
                  ? 'focus:ring-red-500'
                  : 'focus:ring-white'
              } outline-none transition resize-none`}
            />

            {errors.message && (
              <p className="text-red-400 text-xs">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

        </form>
      </div>
    </Section>
  )
}