import { styled } from '@/styles/stitches.config';

export const Input = styled('input', {
  borderRadius: 10,
  '&:focus': {
    outline: 'none',
  },
  variants: {
    auth: {
      true: {
        padding: '15px 20px',
      },
    },
    search: {
      true: {
        padding: '15px 20px',
        borderRadius: 4,
      },
    },
  },
});
