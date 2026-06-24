/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6366F1', light: '#818CF8', dark: '#4F46E5' },
        secondary: { DEFAULT: '#06B6D4', light: '#22D3EE' },
        accent: { DEFAULT: '#10B981', light: '#34D399' },
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6366F1 0%, #06B6D4 50%, #10B981 100%)',
      },
    },
  },
  plugins: [],
};
