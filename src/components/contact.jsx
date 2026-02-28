import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

export function Contact({ personalInfo, socialLinks }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mbljjoka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

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
          Get in Touch
        </motion.h2>
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
              I'd love to hear from you. Feel free to reach out for collaborations or just a friendly hello.
            </p>
            <a href={`mailto:${personalInfo.email}`} className="block font-mono text-sm text-blue-500 no-underline mb-6 hover:underline">
              {personalInfo.email}
            </a>
            <div className="flex flex-col gap-2">
              {socialLinks.slice(0, 4).map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground no-underline hover:text-foreground transition-colors"
                >
                  {s.name} →
                </a>
              ))}
            </div>
          </div>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-card border-border resize-none"
            />
            <Button type="submit" disabled={sending} className="w-full">
              {sending ? "Sending..." : sent ? "Sent ✓" : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
