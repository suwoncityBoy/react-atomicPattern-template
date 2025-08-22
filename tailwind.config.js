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
        'pretendard-medium': ['Pretendard-Medium', 'sans-serif'],
        'pretendard-semibold': ['Pretendard-SemiBold', 'sans-serif'],
        'pretendard-bold': ['Pretendard-Bold', 'sans-serif'],
      },
    },
    screens: {
      fold: { raw: '(max-width: 300px)' },
      mb: { raw: '(min-width: 301px) and(max-width: 600px)' },
      tb: { raw: '(min-width: 601px) and (max-width: 1024px)' },
    },
  },
  plugins: [],
};
