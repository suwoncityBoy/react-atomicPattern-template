import { styled } from '@/styles/stitches.config';

export const Button = styled('button', {
  padding: '0px 20px',
  cursor: 'pointer',
  borderRadius: 8,
  variants: {
    orangeBtn: {
      true: {},
    },
    darkGrayBtn: {
      true: {},
    },
    borderBtn: {
      true: {
        border: '1px solid $btnBorder',
        borderRadius: 6,
        backgroundColor: 'transparent',
      },
    },
  },
});
