import { motion } from 'motion/react'
import { pageVariants, stagger, fadeUp } from '#/lib/motion-variants'
import type { Achievement, SkillGroup } from '#/types'

export default function SkillsSection({
  skills,
  achievements,
}: {
  skills: SkillGroup[]
  achievements: Achievement[]
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
        {/* Skills */}
        <motion.h2
          variants={fadeUp}
          className="border-border mb-10 border-b pb-4 text-3xl font-semibold tracking-tight"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((g) => (
            <div key={g.category}>
              <h3 className="text-muted-foreground mb-3.5 font-mono text-xs tracking-widest uppercase">
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="border-border bg-card text-foreground rounded-md border px-3.5 py-1.5 text-sm transition-colors hover:border-blue-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Achievements */}
        <motion.h2
          variants={fadeUp}
          className="border-border mt-14 mb-10 border-b pb-4 text-3xl font-semibold tracking-tight"
        >
          Achievements
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((a) => (
            <div
              key={a.title}
              className="border-border rounded-xl border p-5 transition-colors hover:border-blue-500"
            >
              <span className="font-mono text-xs text-blue-500">{a.year}</span>
              <h3 className="mt-1.5 mb-1 text-base font-semibold">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {a.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
