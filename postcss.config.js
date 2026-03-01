// Tailwind v4 is handled by @tailwindcss/vite — no PostCSS Tailwind plugin needed here.
// This file intentionally overrides the parent postcss.config.js so the v3 plugin
// does not interfere with the Tailwind v4 @layer syntax used in styles.css.
export default {
  plugins: {},
}
