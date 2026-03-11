import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence } from 'motion/react'
import HeroSection from '#/components/hero-section'
import { personalInfo, socialLinks } from '#/lib/constants'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <AnimatePresence mode="wait">
      <HeroSection
        key="home"
        personalInfo={personalInfo}
        socialLinks={socialLinks}
      />
    </AnimatePresence>
  )
}
