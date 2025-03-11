import { FormProps } from '@/types/elementsProps';
import { twMerge } from 'tailwind-merge';

function Form({ children, className = '', ...props }: FormProps) {
  return (
    <form
      className={twMerge(
        `relative flex flex-col flex-wrap justify-start items-start ${className}`
      )}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
