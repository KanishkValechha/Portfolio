import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  Squares2X2Icon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  CodeBracketIcon as CodeBracketIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
  Squares2X2Icon as Squares2X2IconSolid,
  ChatBubbleLeftIcon as ChatBubbleLeftIconSolid,
} from "@heroicons/react/24/solid";

const TABS = [
  { id: "home", label: "Home", Icon: HomeIcon, ActiveIcon: HomeIconSolid },
  { id: "skills", label: "Skills", Icon: CodeBracketIcon, ActiveIcon: CodeBracketIconSolid },
  { id: "experience", label: "Work", Icon: BriefcaseIcon, ActiveIcon: BriefcaseIconSolid },
  { id: "projects", label: "Projects", Icon: Squares2X2Icon, ActiveIcon: Squares2X2IconSolid },
  { id: "contact", label: "Contact", Icon: ChatBubbleLeftIcon, ActiveIcon: ChatBubbleLeftIconSolid },
];

export function Nav({ active, onNav }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      {/* ── Desktop Top Bar ── */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] py-4 transition-all duration-300 ${
          scrolled
            ? "bg-black/85 backdrop-blur-[14px] border-b border-border py-[10px]"
            : ""
        }`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onNav("home")}
            className="text-xl font-bold hover:bg-transparent p-0"
          >
            K.
          </Button>
          <div className="hidden md:flex gap-1">
            {TABS.map((t) => (
              <Button
                key={t.id}
                variant="ghost"
                size="sm"
                onClick={() => onNav(t.id)}
                className={`text-[13px] px-3.5 py-2 rounded-lg transition-all ${
                  active === t.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {t.label}
              </Button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Floating Dock ── */}
      <motion.div
        className="md:hidden fixed bottom-5 left-1/2 z-[200]"
        style={{ x: "-50%" }}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.55,
          delay: 0.15,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <div className="mobile-dock">
          {TABS.map((t) => {
            const isActive = active === t.id;
            const IconComponent = isActive ? t.ActiveIcon : t.Icon;

            return (
              <button
                key={t.id}
                onClick={() => onNav(t.id)}
                className="mobile-dock-item"
                aria-label={t.label}
              >
                {/* Sliding active pill */}
                {isActive && (
                  <motion.span
                    className="mobile-dock-pill"
                    layoutId="dock-pill"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}

                <motion.span
                  className="relative z-10 flex items-center justify-center"
                  animate={{
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <IconComponent
                    className={`mobile-dock-icon ${
                      isActive ? "mobile-dock-icon--active" : ""
                    }`}
                  />
                </motion.span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
