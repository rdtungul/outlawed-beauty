import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0D0D0D',
          cream: '#FAF7F2',
          blush: '#E8C4B8',
          mauve: '#B57A8A',
          gold: '#C9A96E',
          muted: '#6B6560',
        },
      },
    },
  },
  plugins: [],
}

export default config
