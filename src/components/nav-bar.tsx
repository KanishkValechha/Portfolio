import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import {
    Home,
    Code,
    Briefcase,
    LayoutGrid,
    MessageCircle,
} from 'lucide-react'

const TABS = [
    { id: 'home', path: '/', label: 'Home', icon: Home },
    { id: 'skills', path: '/skills', label: 'Skills', icon: Code },
    { id: 'experience', path: '/experience', label: 'Work', icon: Briefcase },
    { id: 'projects', path: '/projects', label: 'Projects', icon: LayoutGrid },
    { id: 'contact', path: '/contact', label: 'Contact', icon: MessageCircle },
] as const

export default function NavBar() {
    return (
        <>
            <motion.nav
                className="inset-x-0 top-0 z-50 py-2.5"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
            >
                <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
                    <Link
                        to="/"
                        className="p-0 text-xl font-bold hover:bg-transparent no-underline text-foreground"
                    >
                        K.
                    </Link>

                    <div className="hidden gap-1 md:flex">
                        {TABS.map((t) => (
                            <Link
                                key={t.id}
                                to={t.path}
                                className="rounded-lg px-3.5 py-2 text-xs transition-all no-underline"
                                activeProps={{
                                    className: 'bg-muted text-foreground no-underline',
                                }}
                                inactiveProps={{
                                    className: 'text-muted-foreground hover:bg-muted hover:text-foreground no-underline',
                                }}
                            >
                                {t.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.nav>

            <motion.div
                className="dock-safe-area fixed bottom-5 left-1/2 z-200 md:hidden"
                style={{ x: '-50%' }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.55,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl backdrop-saturate-150">
                    {TABS.map((t) => {
                        const Icon = t.icon
                        return (
                            <Link
                                key={t.id}
                                to={t.path}
                                className="mobile-dock-item relative flex items-center justify-center w-12 h-11 bg-transparent cursor-pointer rounded-xl no-underline transition-transform duration-100 active:scale-90"
                                aria-label={t.label}
                                children={({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <motion.span
                                                className="absolute inset-0 rounded-xl bg-white/10 border border-white/5"
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
                                                className={`w-5 h-5 transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/30'}`}
                                                strokeWidth={1.5}
                                            />
                                        </motion.span>
                                    </>
                                )}
                            />
                        )
                    })}
                </div>
            </motion.div>
        </>
    )
}
