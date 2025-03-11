// src/components/atoms/Button.tsx
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('cursor-pointer py-0 px-[20px] rounded-[8px]', {
  variants: {
    orangeBtn: {
      true: '',
    },
    darkGrayBtn: {
      true: '',
    },
    borderBtn: {
      true: 'border border-[1px] border-[var(--btnBorder)] rounded-[6px] bg-transparent',
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  orangeBtn,
  darkGrayBtn,
  borderBtn,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        buttonVariants({
          orangeBtn,
          darkGrayBtn,
          borderBtn,
          className,
        })
      )}
      {...props}
    />
  );
}

export default Button;
