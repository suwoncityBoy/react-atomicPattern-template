import { DivProps } from '@/types/elementsProps';
import { twMerge } from 'tailwind-merge';

export function Column({ children, className = '', ...props }: DivProps) {
  return (
    <div
      className={twMerge(
        `relative flex flex-col flex-wrap justify-start items-start ${className}`
      )}
      {...props}
    >
      {children}
    </div>
  );
}
