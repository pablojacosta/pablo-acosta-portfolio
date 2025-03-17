/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          800: '#065f46',
        },
        zinc: {
          800: '#27272a',
          900: '#18181b',
        },
        yellow: {
          400: '#fbbf24',
        },
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
        },
        background: '#0a0a0a',
        primary: '#8ECAE6',
      },
    },
  },
  plugins: [],
};
