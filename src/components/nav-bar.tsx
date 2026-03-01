import { useState, useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Button } from '#/components/ui/button'
import {
    Home,
    Code,
    Briefcase,
    LayoutGrid,
    MessageCircle,
} from 'lucide-react'

const TABS = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Work', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: LayoutGrid },
    { id: 'contact', label: 'Contact', icon: MessageCircle },
] as const

interface NavBarProps {
    active: string
    onNav: (id: string) => void
}

export default function NavBar({ active, onNav }: NavBarProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <>
            {/* ── Desktop top bar ── */}
            <motion.nav
                className={`fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300 ${scrolled
                    ? 'border-b border-border bg-black/85 py-2.5 backdrop-blur-xl'
                    : ''
                    }`}
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
            >
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
                    <Link
                        to="/"
                        search={{ section: 'home' }}
                        className="p-0 text-xl font-bold hover:bg-transparent no-underline text-foreground"
                    >
                        K.
                    </Link>

                    <div className="hidden gap-1 md:flex">
                        {TABS.map((t) => (
                            <Link
                                key={t.id}
                                to="/"
                                search={{ section: t.id }}
                                replace
                                className={`rounded-lg px-3.5 py-2 text-xs transition-all no-underline ${active === t.id
                                    ? 'bg-muted text-foreground'
                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                    }`}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'instant' })
                                }}
                            >
                                {t.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* ── Mobile floating dock ── */}
            <motion.div
                className="dock-safe-area fixed bottom-5 left-1/2 z-[200] md:hidden"
                style={{ x: '-50%' }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.55,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <div className="mobile-dock">
                    {TABS.map((t) => {
                        const isActive = active === t.id
                        const Icon = t.icon
                        return (
                            <Link
                                key={t.id}
                                to="/"
                                search={{ section: t.id }}
                                replace
                                className="mobile-dock-item no-underline"
                                aria-label={t.label}
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'instant' })
                                }}
                            >
                                {isActive && (
                                    <motion.span
                                        className="mobile-dock-pill"
                                        layoutId="dock-pill"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 500,
                                            damping: 35,
                                        }}
                                    />
                                )}
                                <motion.span
                                    className="relative z-10 flex items-center justify-center"
                                    animate={{ scale: isActive ? 1.05 : 1 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 500,
                                        damping: 30,
                                    }}
                                >
                                    <Icon
                                        className={`mobile-dock-icon ${isActive ? 'mobile-dock-icon--active' : ''
                                            }`}
                                    />
                                </motion.span>
                            </Link>
                        )
                    })}
                </div>
            </motion.div>
        </>
    )
}
