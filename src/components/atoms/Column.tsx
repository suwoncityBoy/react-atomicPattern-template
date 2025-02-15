import { DivProps } from '@/types/elementsProps';

export function Column({ children, className = '', ...props }: DivProps) {
  return (
    <div
      className={`relative flex flex-col flex-wrap justify-start items-start h-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
