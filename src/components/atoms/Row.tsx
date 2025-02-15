// src/components/atoms/Row.tsx
import { DivProps } from '@/types/elementsProps';

export function Row({ children, className = '', ...props }: DivProps) {
  return (
    <div
      className={`relative flex flex-row flex-wrap justify-start items-start w-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
