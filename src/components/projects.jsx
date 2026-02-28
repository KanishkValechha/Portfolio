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

export function Projects({ projects }) {
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
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-xl overflow-hidden no-underline text-foreground flex flex-col transition-all duration-250 hover:border-[#2a2a2a hover:-translate-y-0.75"
            >
              <div className="w-full h-[190px] overflow-hidden bg-card">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-400"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-[17px] font-semibold mb-2 flex items-center gap-2">
                  {p.title}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3.5 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] text-blue-500 px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/6"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.github && (
                  <span
                    className="font-mono text-[11px] text-[#555] cursor-pointer transition-colors hover:text-blue-500 inline-block"
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(p.github, "_blank"); }}
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
  );
}
