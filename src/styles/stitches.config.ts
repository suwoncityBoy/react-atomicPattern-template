import { createStitches } from '@stitches/react';

export const mediaConfig = {
  fold: '(max-width: 280px)',
  mb: '(max-width: 600px)',
  tb: '(min-width: 601px) and (max-width: 1260px)',
};

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  media: mediaConfig,
  theme: {
    colors: {
      bg: '#EBE6D6',
      yellow: '#FDF8E7',
      white: '#fff',
      black: '#000',
    },
  },
});

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    backgroundColor: '#fff',
    fontFamily: 'Pretendard-Regular, sans-serif',
  },
  /*
   * TODO: 로컬폰트가 아닌 웹폰트로 지정하기
   * 1. woff2 , 서브셋 적용
   * 2. API 호출을 최적화하여 성능 개선
   */
  '@font-face': [
    {
      fontFamily: 'Pretendard-Regular',
      src: `url('/fonts/Pretendard-Regular.woff2') format('woff2')`,
    },
    {
      fontFamily: 'Pretendard-Bold',
      src: `url('/fonts/Pretendard-Bold.woff2') format('woff2')`,
    },
  ],
});
