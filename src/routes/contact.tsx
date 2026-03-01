import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence } from 'motion/react'
import ContactSection from '#/components/contact-section'
import { personalInfo, socialLinks } from '#/lib/portfolio-data'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  return (
    <AnimatePresence mode="wait">
      <ContactSection
        key="contact"
        personalInfo={personalInfo}
        socialLinks={socialLinks}
      />
    </AnimatePresence>
  )
}
