/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1C2D',
        ink: '#071426',
        gold: '#D4AF37',
        saffron: '#E25822',
        ivory: '#F6F0DC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 22px 80px rgba(212, 175, 55, 0.16)',
        glass: '0 22px 70px rgba(0, 0, 0, 0.34)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 50% 18%, rgba(212,175,55,.22), transparent 28%), radial-gradient(circle at 80% 30%, rgba(226,88,34,.11), transparent 30%), linear-gradient(180deg, #0B1C2D 0%, #071426 70%, #050C17 100%)',
      },
    },
  },
  plugins: [],
};
