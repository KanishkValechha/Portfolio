import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function Experience({ experiences }) {
  return (
    <motion.div
      className="min-h-screen max-w-[1100px] mx-auto px-6 py-[100px] md:py-[120px]"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h2 variants={fadeUp} className="text-[28px] font-semibold tracking-[-0.03em] mb-10 pb-4 border-b border-border">
          Experience
        </motion.h2>
        <div className="flex flex-col gap-3.5">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-7 border border-border rounded-xl transition-colors hover:border-[#2a2a2a]"
            >
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3.5">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] text-blue-500 px-2.5 py-1 rounded border border-blue-500/20 bg-blue-500/6"
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
                  className="inline-block mt-3.5 font-mono text-xs text-blue-500 opacity-80 hover:opacity-70 transition-opacity"
                >
                  Visit →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
