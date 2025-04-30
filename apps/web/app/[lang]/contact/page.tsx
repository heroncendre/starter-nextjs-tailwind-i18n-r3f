import { Metadata } from 'next'
import { ContactForm } from '../../../components/ContactForm'

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Envoyez-nous un message.'
}

export default function ContactPage() {
    return (
        <div className="w-full md:max-w-2xl mx-auto px-4 py-12 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <ContactForm />
        </div>
    )
}
