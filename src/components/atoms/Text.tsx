import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// 텍스트 변수들
const textVariants = cva(
  //기본 스타일
  'text-black text-base',
  {
    variants: {
      weight: {
        regular: 'font-pretendard-regular',
        bold: 'font-pretendard-bold',
      },
    },
    defaultVariants: {
      weight: 'regular',
    },
  }
);

export interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {}

function Text({ weight, className, children, ...props }: TextProps) {
  return (
    <span className={textVariants({ weight, className })} {...props}>
      {children}
    </span>
  );
}

export default Text;
