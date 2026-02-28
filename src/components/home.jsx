import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export function Home({ personalInfo, socialLinks, onNav }) {
  const roles = personalInfo.roles;
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(iv);
  }, [roles.length]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center relative px-6 py-[100px] md:py-[80px]"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle,#1a1a1a_1px,transparent_1px)] bg-[length:24px_24px] opacity-40"
        style={{ maskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)" }}
      />
      <div className="max-w-[620px] text-center relative z-10">
        <p className="font-mono text-sm text-blue-500 mb-4 tracking-[0.05em]">Hello, I'm</p>
        <h1 className="text-[clamp(48px,8vw,80px)] font-bold tracking-[-0.04em] leading-none mb-4 bg-gradient-to-b from-foreground to-muted-foreground [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-white">
          {personalInfo.name}
        </h1>
        <div className="h-[30px] overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              className="block text-[17px] text-muted-foreground"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {roles[roleIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-[460px] mx-auto mb-8">
          {personalInfo.bio}
        </p>
        <div className="flex gap-3 justify-center mb-10">
          <Button onClick={() => onNav("projects")} className="bg-foreground text-background hover:bg-foreground/90">
            View Projects
          </Button>
          <Button variant="outline" onClick={() => onNav("contact")}>
            Contact
          </Button>
        </div>
        <div className="flex gap-5 justify-center flex-wrap">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#555] hover:text-blue-500 transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
