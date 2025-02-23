import { FormProps } from '@/types/elementsProps';

function Form({ children, className = '', ...props }: FormProps) {
  return (
    <form
      className={`relative flex flex-col flex-wrap justify-start items-start h-auto ${className}`}
      {...props}
    >
      {children}
    </form>
  );
}

export default Form;
