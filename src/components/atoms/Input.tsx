import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// 인풋 변수들
const inputVariants = cva(
  // 기본 스타일
  'rounded-[10px] focus:outline-none',
  {
    variants: {
      auth: {
        true: 'py-[15px] px-[20px]',
      },
      search: {
        true: 'py-[15px] px-[20px] rounded-[4px]',
      },
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export function Input({ auth, search, className, ...props }: InputProps) {
  return (
    <input className={inputVariants({ auth, search, className })} {...props} />
  );
}

export default Input;
