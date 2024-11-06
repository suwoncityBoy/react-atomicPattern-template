import { ReactNode } from 'react';

export interface ModalDefaultProps {
  children: ReactNode;
  closeModal?: () => void;
}

export interface UseModalOutput {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
