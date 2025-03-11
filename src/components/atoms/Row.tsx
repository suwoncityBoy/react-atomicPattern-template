import { DivProps } from '@/types/elementsProps';
import { twMerge } from 'tailwind-merge';

export function Row({ children, className = '', ...props }: DivProps) {
  return (
    <div
      className={twMerge(
        `relative flex flex-row flex-wrap justify-start items-start ${className}`
      )}
      {...props}
    >
      {children}
    </div>
  );
}
