import { createFileRoute } from '@tanstack/react-router'
import { AnimatePresence } from 'motion/react'
import ProjectsSection from '#/components/projects-section'
import { projects } from '#/lib/portfolio-data'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <AnimatePresence mode="wait">
      <ProjectsSection key="projects" projects={projects} />
    </AnimatePresence>
  )
}
