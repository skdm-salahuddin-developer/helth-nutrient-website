/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGreen: {
          50: '#f4f8f0',
          100: '#e5f0dc',
          200: '#cce2bc',
          500: '#5c8d37',
          600: '#4f7d2d',
          700: '#426925',
          800: '#34521d',
          900: '#263b15',
        },
        themeDark: '#1b221b',
        themeAccent: '#d6453d',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 20px 45px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
