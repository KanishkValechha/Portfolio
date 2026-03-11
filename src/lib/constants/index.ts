import type { PersonalInfo, SocialLink } from '#/types'

export const personalInfo: PersonalInfo = {
  name: 'Kanishk',
  fullName: 'Kanishk Valechha',
  role: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'Tech Enthusiast', 'AI/ML Explorer'],
  bio: 'A tech lover who likes to build real world applications that actually have a purpose. Explores new tech be it in dev or non-dev world in his free time.',
  email: 'kanishkvalecha09@gmail.com',
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/KanishkValechha' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kanishk-valechha/',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/kanishkvalecha09/',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/kanishkvalechha',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/kanishk099',
  },
  { name: 'Twitter', url: 'https://x.com/kanishkvalecha' },
]

export { projects } from './projects'
export { experiences } from './experience'
export { skills } from './skills'
export { achievements } from './achievements'
