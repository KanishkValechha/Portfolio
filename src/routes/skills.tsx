import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence } from 'motion/react'
import SkillsSection from '#/components/skills-section'
import { skills, achievements } from '#/lib/portfolio-data'

export const Route = createFileRoute('/skills')({
  component: SkillsPage,
})

function SkillsPage() {
  return (
    <AnimatePresence mode="wait">
      <SkillsSection key="skills" skills={skills} achievements={achievements} />
    </AnimatePresence>
  )
}
