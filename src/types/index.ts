export type Section = 'home' | 'skills' | 'experience' | 'projects' | 'contact'

export interface PersonalInfo {
  name: string
  fullName: string
  role: string
  roles: string[]
  bio: string
  email: string
}

export interface SocialLink {
  name: string
  url: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  technologies: string[]
  link?: string
}

export interface Project {
  title: string
  description: string
  image: string
  link: string
  github: string
  technologies: string[]
}

export interface Achievement {
  title: string
  desc: string
  year: string
}