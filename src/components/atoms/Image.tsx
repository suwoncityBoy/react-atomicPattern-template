import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ImgProps } from '@/types/elementsProps';

const imageVariants = cva('w-[40px] h-[40px] object-contain');

export function Image({ className, ...props }: ImgProps) {
  return <img className={twMerge(imageVariants({ className }))} {...props} />;
}

export default Image;
