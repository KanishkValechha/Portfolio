import { motion } from 'motion/react'
import type { Project } from '#/types'
import { pageVariants, stagger, fadeUp } from '#/lib/motion-variants'

export default function ProjectsSection({ projects }: { projects: Project[] }) {
    return (
        <motion.div
            className="mx-auto h-svh max-w-5xl px-6 pt-4 pb-24 md:py-12"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2
                    variants={fadeUp}
                    className="mb-10 border-b border-border pb-4 text-3xl font-semibold tracking-tight"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.map((p, i) => (
                        <motion.a
                            key={i}
                            variants={fadeUp}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col overflow-hidden rounded-xl border border-border no-underline transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700"
                        >
                            <div className="h-48 w-full overflow-hidden bg-card">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-foreground">
                                    {p.title}
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                    >
                                        <path
                                            d="M1 13L13 1M13 1H3M13 1V11"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </h3>

                                <p className="mb-3.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                                    {p.description}
                                </p>

                                <div className="mb-2.5 flex flex-wrap gap-1.5">
                                    {p.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded border border-blue-500/20 bg-blue-500/5 px-2 py-0.5 font-mono text-[10px] text-blue-500"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {p.github && (
                                    <span
                                        className="inline-block cursor-pointer font-mono text-xs text-muted-foreground/60 transition-colors hover:text-blue-500"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            window.open(p.github, '_blank')
                                        }}
                                    >
                                        Source Code
                                    </span>
                                )}
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}
