import type { Project } from '#/types'

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
    image: '/assets/aconews.png',
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
