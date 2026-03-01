import { motion } from 'motion/react'
import type { Experience } from '#/types'
import { pageVariants, stagger, fadeUp } from '#/lib/motion-variants'

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[]
}) {
  return (
    <motion.div
      className="mx-auto min-h-full max-w-5xl px-6 pt-4 pb-24 md:py-12"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h2
          variants={fadeUp}
          className="border-border mb-10 border-b pb-4 text-3xl font-semibold tracking-tight"
        >
          Experience
        </motion.h2>

        <div className="flex flex-col gap-3.5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border-border rounded-xl border p-7 transition-colors hover:border-zinc-700"
            >
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-muted-foreground mt-0.5 text-sm">
                    {exp.company}
                  </p>
                </div>
                <span className="text-muted-foreground font-mono text-xs whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted-foreground mb-3.5 text-sm leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 font-mono text-xs text-blue-500"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-block font-mono text-xs text-blue-500 opacity-80 transition-opacity hover:opacity-70"
                >
                  Visit →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
