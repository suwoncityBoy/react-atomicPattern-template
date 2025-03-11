import React from 'react';
import { twMerge } from 'tailwind-merge';
import { cva, VariantProps } from 'class-variance-authority';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

// 인풋 변수들
const inputVariants = cva(
  // 기본 스타일
  'rounded-[10px] focus:outline-none',
  {
    variants: {
      auth: {
        true: 'py-[15px] px-[20px] border-[1px] border-gray-300',
      },
      search: {
        true: 'py-[15px] px-[20px] rounded-[4px]',
      },
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ auth, search, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={twMerge(inputVariants({ auth, search, className }))}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
