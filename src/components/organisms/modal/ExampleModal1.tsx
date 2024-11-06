import { ModalDefaultProps } from '@/types/ModalTypes';

const ExampleModal1 = ({ children }: ModalDefaultProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

ExampleModal1.Header = ({ children }: ModalDefaultProps) => (
  <div>{children}</div>
);

ExampleModal1.Content = ({ children }: ModalDefaultProps) => (
  <div>{children}</div>
);

ExampleModal1.Footer = ({ children }: ModalDefaultProps) => (
  <div>{children}</div>
);

export default ExampleModal1;
