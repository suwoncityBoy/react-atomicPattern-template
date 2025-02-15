import { cva } from 'class-variance-authority';
import { ImgProps } from '@/types/elementsProps';

const iconVariants = cva('w-[20px] h-[20px] object-contain');

export function Icon({ className, ...props }: ImgProps) {
  return <img className={iconVariants({ className })} {...props} />;
}

export default Icon;
