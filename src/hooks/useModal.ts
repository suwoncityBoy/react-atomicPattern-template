import { UseModalOutput } from '@/types/ModalTypes';
import { useState, useCallback } from 'react';

export function useModal(): UseModalOutput {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    document.body.style.overflow = 'hidden'; // 스크롤 비활성화
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'auto'; // 스크롤 활성화
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
