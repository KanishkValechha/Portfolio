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
    personalInfo: PersonalInfo,
    socialLinks: SocialLink[],
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

                <h1 className="mb-4 bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent sm:text-7xl lg:text-8xl">
                    {personalInfo.name}
                </h1>

                <div className="role-container mb-6 h-6">
                    {roles.map((role) => (
                        <span
                            key={role}
                            className="role-text text-base text-muted-foreground"
                        >
                            {role}
                        </span>
                    ))}
                </div>

                <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
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
                            className="font-mono text-xs text-muted-foreground/60 transition-colors hover:text-blue-500"
                        >
                            {s.name}
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
