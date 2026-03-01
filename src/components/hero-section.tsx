import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '#/components/ui/button'
import type { PersonalInfo, SocialLink } from '#/lib/portfolio-data'
import { pageVariants } from '#/lib/motion-variants'

interface HeroSectionProps {
    personalInfo: PersonalInfo
    socialLinks: SocialLink[]
    onNav: (id: string) => void
}

export default function HeroSection({
    personalInfo,
    socialLinks,
    onNav,
}: HeroSectionProps) {
    const { roles } = personalInfo
    const [roleIdx, setRoleIdx] = useState(0)

    useEffect(() => {
        const iv = setInterval(
            () => setRoleIdx((i) => (i + 1) % roles.length),
            2600,
        )
        return () => clearInterval(iv)
    }, [roles.length])

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

                <div className="mb-6 h-8 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={roleIdx}
                            className="block text-base text-muted-foreground"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                        >
                            {roles[roleIdx]}
                        </motion.span>
                    </AnimatePresence>
                </div>

                <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-muted-foreground">
                    {personalInfo.bio}
                </p>

                <div className="mb-10 flex justify-center gap-3">
                    <Button
                        onClick={() => onNav('projects')}
                        className="bg-foreground text-background hover:bg-foreground/90"
                    >
                        View Projects
                    </Button>
                    <Button variant="outline" onClick={() => onNav('contact')}>
                        Contact
                    </Button>
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
