import { motion } from 'motion/react'
import type { Experience, ExperiencePosition } from '#/types'
import { pageVariants, stagger, fadeUp } from '#/lib/motion-variants'

function TechBadges({ technologies }: { technologies: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((t) => (
        <span
          key={t}
          className="rounded border border-blue-500/20 bg-blue-500/5 px-2.5 py-1 font-mono text-xs text-blue-500"
        >
          {t}
        </span>
      ))}
    </div>
  )
}

function VisitLink({ link }: { link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-mono text-xs text-blue-500 opacity-80 transition-opacity hover:opacity-70"
    >
      Visit →
    </a>
  )
}

function TimelinePosition({
  position,
  isFirst,
  isLast,
}: {
  position: ExperiencePosition
  isFirst: boolean
  isLast: boolean
}) {
  return (
    <div className="relative pl-8">
      {/* Vertical timeline line */}
      {!isLast && (
        <div className="absolute top-3 left-[7px] bottom-0 w-px bg-zinc-700/60" />
      )}

      {/* Timeline dot */}
      <div className="absolute top-[7px] left-0">
        {isFirst ? (
          /* Filled glowing dot for current position */
          <div className="relative flex h-[15px] w-[15px] items-center justify-center">
            <div className="absolute h-[15px] w-[15px] rounded-full bg-blue-500/20" />
            <div className="h-[9px] w-[9px] rounded-full bg-blue-500" />
          </div>
        ) : (
          /* Ring dot for past positions */
          <div className="flex h-[15px] w-[15px] items-center justify-center">
            <div className="h-[9px] w-[9px] rounded-full border-2 border-zinc-600 bg-transparent" />
          </div>
        )}
      </div>

      {/* Position content */}
      <div className={isLast ? 'pb-0' : 'pb-6'}>
        <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
          <h4 className="text-[15px] font-semibold">{position.role}</h4>
          <span className="text-muted-foreground font-mono text-xs whitespace-nowrap">
            {position.period}
          </span>
        </div>
        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
          {position.description}
        </p>
        <TechBadges technologies={position.technologies} />
      </div>
    </div>
  )
}

function MultiPositionCard({ exp }: { exp: Experience }) {
  return (
    <>
      {/* Company header */}
      <div className="mb-5 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold">{exp.company}</h3>
          <p className="text-muted-foreground mt-0.5 text-sm">
            <span>{exp.period}</span>
          </p>
        </div>
        {exp.link && <VisitLink link={exp.link} />}
      </div>

      {/* Positions timeline */}
      <div>
        {exp.positions!.map((pos, j) => (
          <TimelinePosition
            key={j}
            position={pos}
            isFirst={j === 0}
            isLast={j === exp.positions!.length - 1}
          />
        ))}
      </div>
    </>
  )
}

function SinglePositionCard({ exp }: { exp: Experience }) {
  return (
    <>
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

      <TechBadges technologies={exp.technologies} />

      {exp.link && (
        <div className="mt-3.5">
          <VisitLink link={exp.link} />
        </div>
      )}
    </>
  )
}

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
              {exp.positions && exp.positions.length > 0 ? (
                <MultiPositionCard exp={exp} />
              ) : (
                <SinglePositionCard exp={exp} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
