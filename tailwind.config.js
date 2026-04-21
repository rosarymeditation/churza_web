/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          card: '#152740',
          elevated: '#1C3352',
          hint: '#4A6080',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C97A',
          pale: '#F5E9C8',
        },
        cream: '#FAF7F2',
        muted: '#8FA3BC',
        success: '#2D9E6B',
        error: '#E05C5C',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E8C97A 100%)',
      },
    },
  },
  plugins: [],
};