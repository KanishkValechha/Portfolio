import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "skills", label: "Skills", icon: "◆" },
  { id: "experience", label: "Work", icon: "▸" },
  { id: "projects", label: "Projects", icon: "□" },
  { id: "contact", label: "Contact", icon: "✉" },
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

      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-32px)] max-w-[400px]">
        <div className="flex items-center justify-around bg-[rgba(18,18,18,0.92)] backdrop-blur-4xl border border-border rounded-[20px] px-2 py-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => onNav(t.id)}
              className={`flex flex-col items-center gap-0.5 p-2 rounded-[14px] transition-all min-w-[52px] ${
                active === t.id
                  ? "bg-[rgba(0,112,243,0.12)]"
                  : ""
              }`}
            >
              <span className={`text-base transition-colors ${
                active === t.id ? "text-blue-500" : "text-[#555]"
              }`}>
                {t.icon}
              </span>
              <span className={`text-[9px] font-medium tracking-[0.02em] transition-colors ${
                active === t.id ? "text-blue-500" : "text-[#555]"
              }`}>
                {t.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
