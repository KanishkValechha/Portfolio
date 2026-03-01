import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useCallback } from 'react'
import { AnimatePresence } from 'motion/react'

import NavBar from '#/components/nav-bar'
import HeroSection from '#/components/hero-section'
import SkillsSection from '#/components/skills-section'
import ExperienceSection from '#/components/experience-section'
import ProjectsSection from '#/components/projects-section'
import ContactSection from '#/components/contact-section'
import {
  personalInfo,
  socialLinks,
  skills,
  experiences,
  projects,
  achievements,
} from '#/lib/portfolio-data'
import type { Section } from '#/types'

export const Route = createFileRoute('/')({
  validateSearch: (
    search: Record<string, unknown>,
  ): { section: Section } => {
    const section = (search.section as Section) ?? 'home'
    return { section }
  },
  component: Portfolio,
})

function Portfolio() {
  const { section } = Route.useSearch()
  const navigate = useNavigate({ from: Route.fullPath })

  const handleNav = useCallback(
    (id: string) => {
      navigate({
        search: { section: id as Section },
        replace: true,
      })
      window.scrollTo({ top: 0, behavior: 'instant' })
    },
    [navigate],
  )

  const renderSection = () => {
    switch (section) {
      case 'skills':
        return (
          <SkillsSection
            key="skills"
            skills={skills}
            achievements={achievements}
          />
        )
      case 'experience':
        return <ExperienceSection key="experience" experiences={experiences} />
      case 'projects':
        return <ProjectsSection key="projects" projects={projects} />
      case 'contact':
        return (
          <ContactSection
            key="contact"
            personalInfo={personalInfo}
            socialLinks={socialLinks}
          />
        )
      default:
        return (
          <HeroSection
            key="home"
            personalInfo={personalInfo}
            socialLinks={socialLinks}
            onNav={handleNav}
          />
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar active={section} onNav={handleNav} />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </main>
    </div>
  )
}
