'use client'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Section from './Section'

export default function ContactSection() {
    const [selectedForm, setSelectedForm] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const form = e.target
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
        } catch (error) {
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

        const buttonClass = `w-full bg-black text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed`

        switch (selectedForm) {
            case 'hire':
                return (
                    <form {...formProps}>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" required className={inputClass} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" required className={inputClass} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="position">Position / Role you want to hire for</label>
                            <input
                                type="text"
                                name="position"
                                // placeholder="Position / Role you want to hire for"
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="message">Tell me more...</label>
                            <textarea
                                name="message"
                                // placeholder="Tell me more..."
                                rows="4"
                                className={inputClass}
                            ></textarea>
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
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" required className={inputClass} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" required className={inputClass} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="projectType">Type of Project (Website, App, etc.)</label>
                            <input
                                type="text"
                                name="projectType"
                                // placeholder="Type of Project (Website, App, etc.)"
                                className={inputClass}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="details">Project details or requirements</label>
                            <textarea
                                name="details"
                                // placeholder="Project details or requirements"
                                rows="4"
                                className={inputClass}
                            ></textarea>
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
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                    Let’s <span className="text-black dark:text-white">Connect</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base">
                    Whether you’re looking to collaborate, hire, or discuss a project — I’d love to hear from you.
                </p>

                {!selectedForm ? (
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button
                            onClick={() => setSelectedForm('hire')}
                            className="px-6 py-3 border rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                        >
                            Hire Me
                        </button>
                        <button
                            onClick={() => setSelectedForm('project')}
                            className="px-6 py-3 border rounded-xl hover:bg-black hover:text-white transition-all duration-300"
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
