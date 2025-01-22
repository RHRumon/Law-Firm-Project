/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff', // Default white background
      },
      screens: {
        '3xl': '1920px',
        'big-lg':'1025px',
        'big-mid': '769px', // Adding a new breakpoint for 1920px
        'smaller': '425px',
        'small':'375px',
        'tiny':'320px',
        'xs': '280px', 
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#570DF8",
          "secondary": "#F000B8",
          "accent": "#37CDBE",
          "neutral": "#3D4451",
          "base-100": "#ffffff", // Background set to white
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      
    ],

  },
}

