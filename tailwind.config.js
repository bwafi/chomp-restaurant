/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#35b8be',
        text: '#08090a',
        paragraf: '#546285',
      },
      backgroundImage: {
        'button-wave': 'url("../public/icon/button-wave.svg")',
        'banner-wave': 'url("../public/icon/banner-wave.svg")',
        'content-pattern': 'url("../public/icon/content-pattern.svg")',
        'bg-content': 'url("../public/icon/bg-content.svg")',
        'drawn-arrow': 'url("../public/icon/drawn-arrow.svg")',
      },
      screens: {
        sm: '576px',
      },
    },
  },
  plugins: [],
};
