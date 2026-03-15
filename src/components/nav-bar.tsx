import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Home, Code, Briefcase, LayoutGrid, MessageCircle } from 'lucide-react'

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
      {/* Desktop Navigation */}
      <motion.nav
        className="inset-x-0 top-0 z-50 py-2.5"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <Link
            to="/"
            className="text-foreground p-0 text-xl font-bold no-underline hover:bg-transparent"
          >
            K.
          </Link>

          {/* Desktop Liquid Glass Navbar */}
          <div className="liquid-glass-container hidden md:flex">
            <div className="relative flex items-center gap-0.5 rounded-2xl p-1.5">
              {TABS.map((t) => {
                const Icon = t.icon
                return (
                  <Link
                    key={t.id}
                    to={t.path}
                    className="liquid-glass-item relative z-10 flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs no-underline transition-colors duration-300"
                    aria-label={t.label}
                    children={({ isActive }) => (
                      <>
                        {isActive && (
                          <motion.span
                            className="liquid-glass-pill absolute inset-0 rounded-xl"
                            layoutId="desktop-liquid-pill"
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              damping: 30,
                              mass: 1,
                            }}
                          />
                        )}
                        <span
                          className={`relative z-10 flex items-center gap-2 transition-all duration-300 ${
                            isActive
                              ? 'text-white'
                              : 'text-white/50 hover:text-white/80'
                          }`}
                        >
                          <Icon className="h-4 w-4" strokeWidth={1.5} />
                          <span className="font-medium">{t.label}</span>
                        </span>
                      </>
                    )}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Liquid Glass Dock */}
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
        <div className="liquid-glass-nav flex items-center gap-0.5 rounded-[22px] p-1.5">
          {TABS.map((t) => {
            const Icon = t.icon
            return (
              <Link
                key={t.id}
                to={t.path}
                className="liquid-glass-item relative flex h-12 w-13 cursor-pointer items-center justify-center rounded-2xl bg-transparent no-underline transition-transform duration-100 active:scale-90"
                aria-label={t.label}
                children={({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        className="liquid-glass-pill absolute inset-0 rounded-2xl"
                        layoutId="mobile-liquid-pill"
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 28,
                          mass: 1.2,
                        }}
                      />
                    )}
                    <motion.span
                      className="relative z-10 flex items-center justify-center"
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        y: isActive ? -1 : 0,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <Icon
                        className={`h-5 w-5 transition-all duration-300 ${
                          isActive
                            ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                            : 'text-white/40'
                        }`}
                        strokeWidth={isActive ? 2 : 1.5}
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
