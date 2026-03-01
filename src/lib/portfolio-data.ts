import type {
  PersonalInfo,
  SocialLink,
  SkillGroup,
  Experience,
  Project,
  Achievement,
} from '#/types'

export const personalInfo: PersonalInfo = {
  name: 'Kanishk',
  fullName: 'Kanishk Valechha',
  role: 'Full Stack Developer',
  roles: [
    'Full Stack Developer',
    'Tech Enthusiast',
    'Competitive Coder',
    'ML Enthusiast',
  ],
  bio: 'I am a Fullstack Developer who likes to code. I do competitive programming as a habit, love to see new technologies be it in dev or non-dev world.',
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

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'C', 'C++'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Astro', 'TailwindCSS', 'Sass'],
  },
  {
    category: 'Backend & DB',
    items: ['Node.js', 'Django', 'MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'DevOps',
    items: ['Git', 'Docker'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Fullstack Developer Intern',
    company: 'Software Development Centre, MUJ',
    period: 'Jan 2025 — Present',
    description:
      'Developing a Wall of Fame website for college using Next.js and MongoDB, creating an interactive platform to showcase student achievements.',
    technologies: ['Next.js', 'MongoDB'],
    link: 'https://wall-of-fame-rho.vercel.app/',
  },
  {
    role: 'Freelance Web Developer',
    company: 'TechPI Solutions',
    period: 'Nov 2024',
    description:
      'Led the development of their new website. Implemented complex visual animations for improved user experience. Optimized website performance and improved SEO.',
    technologies: ['Astro', 'Tailwind CSS', 'Motion'],
    link: 'https://tech-pi-website.vercel.app/',
  },
  {
    role: 'Web Developer',
    company: 'Cyber Space Club',
    period: 'May 2024 — Present',
    description:
      'Planned the overhaul of the club website, utilizing Next.js to enhance dynamic content delivery. Reduced initial load time by 50% and improved SEO by 25%.',
    technologies: ['Next.js', 'Tailwind CSS'],
    link: 'https://csc-24.vercel.app',
  },
]

export const projects: Project[] = [
  {
    title: 'Wall of Fame',
    description:
      'A Wall of Fame website for college using Next.js and MongoDB — an interactive platform to showcase student achievements with dynamic content delivery.',
    image: '/assets/WallOfFame.png',
    link: 'https://wall-of-fame-rho.vercel.app/',
    github: '',
    technologies: ['Next.js', 'MongoDB', 'Vercel'],
  },
  {
    title: 'Chance Chat',
    description:
      'Decentralized social media application using Aptos Roll API for truly random content distribution, providing a level playing field for all users.',
    image: '/assets/ChanceChat.png',
    link: 'https://chance-chat.vercel.app/',
    github: 'https://github.com/KanishkValechha/ChanceChat',
    technologies: ['React', 'Aptos', 'Move', 'TypeScript', 'TailwindCSS'],
  },
  {
    title: 'Health Dome',
    description:
      'Hospital management system for Delhi hospitals. Llama AI for symptom-to-disease prediction with 90% accuracy. Shortlisted for Smart India Hackathon Round 2.',
    image: '/assets/HealthDome.png',
    link: 'https://youtu.be/gC629wksFf8',
    github: 'https://github.com/KanishkValechha/Health_Dome',
    technologies: ['React', 'Python', 'Flask', 'SQL', 'Docker', 'AWS'],
  },
  {
    title: 'LeetwithGit',
    description:
      'Chrome extension that pushes LeetCode submissions to GitHub with a single click. Users can add friends and track submissions.',
    image: '/assets/LeetwithGit.png',
    link: 'https://github.com/KanishkValechha/LeetWithGit',
    github: 'https://github.com/KanishkValechha/LeetWithGit',
    technologies: ['JavaScript', 'GitHub API', 'OAuth', 'Chrome Extension'],
  },
  {
    title: 'AcoNews',
    description:
      'Responsive news app integrating Gnews API with articles from 60,000+ sources in 22 languages across 30 countries.',
    image: '/assets/AcoNews.png',
    link: 'https://aconews-2898d.web.app/',
    github: 'https://github.com/KanishkValechha/AcoNews',
    technologies: ['React', 'TailwindCSS', 'Firebase'],
  },
  {
    title: 'Stock Predictor',
    description:
      'LSTM-based model to analyze and forecast stock market prices using historical data. 70%+ accuracy for directional movement prediction.',
    image: '/assets/Stock.png',
    link: 'https://github.com/KanishkValechha/Stock-Price-Prediction-Model',
    github: 'https://github.com/KanishkValechha/Stock-Price-Prediction-Model',
    technologies: ['Python', 'TensorFlow', 'Streamlit'],
  },
]

export const achievements: Achievement[] = [
  {
    title: 'Ranked 3rd at Abacus',
    desc: 'State Level Abacus Competition',
    year: '2017',
  },
  {
    title: '3 Star at Codechef',
    desc: 'High-level competitive programming',
    year: '2024',
  },
  {
    title: 'SIH 2024 Finalists',
    desc: 'Smart India Hackathon for Health Dome',
    year: '2024',
  },
  {
    title: 'Knight at LeetCode',
    desc: 'Solved 100+ problems on LeetCode',
    year: '2024',
  },
]
