// Tailwind CSS v4 — chargé via @config dans src/styles/global.css
// Référence : https://tailwindcss.com/docs/configuration

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {

      // ── Couleurs ──────────────────────────────────────────────────────────
      colors: {

        // Bleu FacetView — #1565C0 comme teinte 700
        brand: {
          50:  '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1565C0',   // ← couleur principale
          800: '#0D47A1',
          900: '#0A2E6E',
          950: '#061A3F',
        },

        // Surfaces neutres (fond, cartes, séparateurs)
        surface: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },

      },

      // ── Typographie ───────────────────────────────────────────────────────
      fontFamily: {
        // UI & corps de texte
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Titres hero — touche luxe / joaillerie
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },

      // ── Espacements personnalisés ─────────────────────────────────────────
      maxWidth: {
        '8xl': '88rem',   // 1408 px — large hero sections
      },

    },
  },
}
