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

export function Skills({ skills, achievements }) {
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
          Skills
        </motion.h2>
        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {skills.map((g) => (
            <div key={g.category}>
              <h3 className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.08em] mb-3.5">
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-3.5 py-1.5 rounded-md text-[13px] border border-border text-foreground bg-card transition-colors hover:border-blue-500"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.h2 variants={fadeUp} className="text-[28px] font-semibold tracking-[-0.03em] mb-10 pb-4 border-b border-border mt-14">
          Achievements
        </motion.h2>
        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {achievements.map((a, i) => (
            <div key={i} className="p-5 border border-border rounded-xl transition-colors hover:border-blue-500">
              <span className="font-mono text-[11px] text-blue-500">{a.year}</span>
              <h3 className="text-[15px] font-semibold mt-1.5 mb-1">{a.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
