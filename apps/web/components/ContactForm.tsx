'use client'

import { useState } from 'react'
import { toast } from '@ui/toast'

export function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(form.email)) {
            toast.error('Adresse email invalide')
            return
        }

        toast.success('Message envoyé !')
        // 👉 ici tu pourrais envoyer à une route API ou service externe
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6 px-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="votre@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre message"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition w-full"
                >
                    Envoyer
                </button>
            </div>
        </form>
    )
}
