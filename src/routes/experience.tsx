import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence } from 'motion/react'
import ExperienceSection from '#/components/experience-section'
import { experiences } from '#/lib/portfolio-data'

export const Route = createFileRoute('/experience')({
  component: ExperiencePage,
})

function ExperiencePage() {
  return (
    <AnimatePresence mode="wait">
      <ExperienceSection key="experience" experiences={experiences} />
    </AnimatePresence>
  )
}
