/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#7C2D12',
          light: '#9A3412',
        },
        localskills: {
          orange:      '#F97316',
          orangeLight: '#FB923C',
          dark:        '#7C2D12',
        },
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to bottom right, #F97316, #FB923C)',
      },
    },
  },
  plugins: [],
};
