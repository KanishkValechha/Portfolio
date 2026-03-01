import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { buttonVariants } from '#/components/ui/button'
import type { PersonalInfo, SocialLink } from '#/types'
import { pageVariants } from '#/lib/motion-variants'
import { cn } from '#/lib/utils'

export default function HeroSection({
  personalInfo,
  socialLinks,
}: {
  personalInfo: PersonalInfo
  socialLinks: SocialLink[]
}) {
  const { roles } = personalInfo

  return (
    <motion.div
      className="relative flex h-full items-center justify-center px-6"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="relative z-10 max-w-xl text-center">
        <p className="mb-4 font-mono text-sm tracking-widest text-blue-500">
          Hello, I'm
        </p>

        <h1 className="from-foreground to-muted-foreground mb-4 bg-linear-to-b bg-clip-text text-5xl leading-none font-bold tracking-tighter text-transparent sm:text-7xl lg:text-8xl">
          {personalInfo.name}
        </h1>

        <div className="relative mb-6 flex h-6 justify-center">
          {roles.map((role) => (
            <span
              key={role}
              className="role-text text-muted-foreground absolute text-base whitespace-nowrap"
            >
              {role}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground mx-auto mb-8 max-w-md text-base leading-relaxed">
          {personalInfo.bio}
        </p>

        <div className="mb-10 flex justify-center gap-3">
          <Link
            to="/projects"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'bg-foreground text-background hover:bg-foreground/90 no-underline',
            )}
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'no-underline',
            )}
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 font-mono text-xs transition-colors hover:text-blue-500"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
