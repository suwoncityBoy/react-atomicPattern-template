/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#EBE6D6',
        yellow: '#FDF8E7',
        white: '#fff',
        black: '#000',
      },
      fontFamily: {
        'pretendard-regular': ['Pretendard-Regular', 'sans-serif'],
        'pretendard-bold': ['Pretendard-Bold', 'sans-serif'],
      },
    },
    screens: {
      fold: { raw: '(max-width: 280px)' },
      mb: { raw: '(max-width: 600px)' },
      tb: { raw: '(min-width: 601px) and (max-width: 1260px)' },
    },
  },
  plugins: [],
};
