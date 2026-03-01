import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from '#/components/ui/button'
import { Input } from '#/components/ui/input'
import { Textarea } from '#/components/ui/textarea'
import type { PersonalInfo, SocialLink } from '#/types'
import { pageVariants, stagger, fadeUp } from '#/lib/motion-variants'


export default function ContactSection({
    personalInfo,
    socialLinks,
}: {
    personalInfo: PersonalInfo,
    socialLinks: SocialLink[],
}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [sending, setSending] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSending(true)
        try {
            const res = await fetch('https://formspree.io/f/mbljjoka', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            if (res.ok) {
                setSent(true)
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setSent(false), 3000)
            }
        } catch (err) {
            console.error(err)
        } finally {
            setSending(false)
        }
    }

    return (
        <motion.div
            className="mx-auto min-h-screen max-w-5xl px-6 py-24 md:py-28"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <motion.div variants={stagger} initial="initial" animate="animate">
                <motion.h2
                    variants={fadeUp}
                    className="mb-10 border-b border-border pb-4 text-3xl font-semibold tracking-tight"
                >
                    Get in Touch
                </motion.h2>

                <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-1 gap-12 md:grid-cols-2"
                >
                    <div>
                        <p className="mb-5 text-base leading-relaxed text-muted-foreground">
                            I'd love to hear from you. Feel free to reach out for
                            collaborations or just a friendly hello.
                        </p>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="mb-6 block font-mono text-sm text-blue-500 no-underline hover:underline"
                        >
                            {personalInfo.email}
                        </a>
                        <div className="flex flex-col gap-2">
                            {socialLinks.slice(0, 4).map((s) => (
                                <a
                                    key={s.name}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted-foreground no-underline transition-colors hover:text-foreground"
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
                            onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                            }
                            className="border-border bg-card"
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            className="border-border bg-card"
                        />
                        <Textarea
                            placeholder="Message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                            }
                            className="resize-none border-border bg-card"
                        />
                        <Button type="submit" disabled={sending} className="w-full">
                            {sending ? 'Sending...' : sent ? 'Sent ✓' : 'Send Message'}
                        </Button>
                    </form>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
