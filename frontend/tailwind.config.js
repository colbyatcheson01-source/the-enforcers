/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#1e293b',
          600: '#0f172a',
          700: '#0a0f1e',
          800: '#070b14',
          900: '#03050a',
        },
        guardian: {
          gold: '#d4a017',
          goldLight: '#eab308',
          goldDark: '#b8860b',
          steel: '#94a3b8',
          steelLight: '#cbd5e0',
          steelDark: '#475569',
          iron: '#334155',
          midnight: '#0f172a',
          void: '#020617',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#d4a017',
          600: '#b8860b',
          700: '#92400e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      backgroundImage: {
        'knight-pattern': "url('/images/guardian-of-justice.svg')",
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 160, 23, 0.3)',
        'gold-lg': '0 8px 30px 0 rgba(212, 160, 23, 0.25)',
      },
    },
  },
  plugins: [],
};
