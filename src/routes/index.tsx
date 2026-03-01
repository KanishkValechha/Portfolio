import { useState, useCallback } from 'react'
import { createFileRoute } from '@tanstack/react-router'
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

export const Route = createFileRoute('/')({ 
  ssr: false,
  component: Portfolio 
})

function Portfolio() {
  const [active, setActive] = useState('home')

  const handleNav = useCallback((id: string) => {
    setActive(id)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const renderSection = () => {
    switch (active) {
      case 'home':
        return (
          <HeroSection
            key="home"
            personalInfo={personalInfo}
            socialLinks={socialLinks}
            onNav={handleNav}
          />
        )
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
      <NavBar active={active} onNav={handleNav} />
      <main className="min-h-screen">
        <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
      </main>
    </div>
  )
}
