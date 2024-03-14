/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      smd: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'filled-btn': "url('assets/Register%20Button%20(1).svg')",
        'bubbles': "url('assets/Clip%20path%20group.svg')",
        'africa': "url('assets/africa%202%20(1).svg')",
        'hero': "url('assets/hero_bg.svg')",
        'hero2': "url('assets/group_photo_2.jpg')",
        'random': "url('assets/random_bg.svg')"
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'IBM': ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
}

