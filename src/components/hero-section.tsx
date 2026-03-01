import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { buttonVariants } from '#/components/ui/button'
import type { PersonalInfo, SocialLink } from '#/lib/portfolio-data'
import { pageVariants } from '#/lib/motion-variants'
import { cn } from '#/lib/utils'

interface HeroSectionProps {
    personalInfo: PersonalInfo
    socialLinks: SocialLink[]
    onNav?: (id: string) => void
}

export default function HeroSection({
    personalInfo,
    socialLinks,
}: HeroSectionProps) {
    const { roles } = personalInfo

    return (
        <motion.div
            className="relative flex min-h-screen items-center justify-center px-6 py-24 md:py-20"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {/* Dot-grid background */}
            <div
                className="absolute inset-0 bg-[radial-gradient(circle,#1a1a1a_1px,transparent_1px)] bg-[length:24px_24px] opacity-40"
                style={{
                    maskImage:
                        'radial-gradient(ellipse at center, black 20%, transparent 65%)',
                }}
            />

            <div className="relative z-10 max-w-xl text-center">
                <p className="mb-4 font-mono text-sm tracking-widest text-blue-500">
                    Hello, I'm
                </p>

                <h1 className="mb-4 bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-5xl font-bold leading-none tracking-tighter text-transparent sm:text-7xl lg:text-8xl">
                    {personalInfo.name}
                </h1>

                <p className="mb-6 text-base text-muted-foreground">
                    {roles[0]}
                </p>

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
