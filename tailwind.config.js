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
        dark: {
          900: '#070709',
          800: '#0d0d11',
          700: '#13131a',
          600: '#1c1c26',
          500: '#282836',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F4ECD8',
          200: '#E7D7AF',
          300: '#D9BE81',
          400: '#C9A961', // Base Gold Accent
          500: '#B89347',
          600: '#997632',
          700: '#755823',
          800: '#543E19',
          light: '#E6C687',
          dark: '#A38341',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'gold-linear': 'linear-gradient(135deg, #E6C687 0%, #C9A961 50%, #997632 100%)',
        'gold-radial': 'radial-gradient(ellipse at top, rgba(201, 169, 97, 0.25) 0%, rgba(10, 10, 10, 0) 70%)',
        'glass-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(201, 169, 97, 0.3)',
        'gold-sm': '0 0 12px -2px rgba(201, 169, 97, 0.25)',
      },
    },
  },
  plugins: [],
}
