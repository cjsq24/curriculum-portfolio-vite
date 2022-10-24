import { useEffect } from 'react';
import { EVisibilityModal } from 'src/utils/types';

interface IProps {
  visibilityModal: EVisibilityModal;
  setVisibilityModal: (value: EVisibilityModal) => void;
  children?: JSX.Element | JSX.Element[];
  onClose?: () => void;
}

const Modal = ({
  visibilityModal,
  setVisibilityModal,
  children,
  onClose,
}: IProps) => {
  useEffect(() => {
    const backgroundModal = document.querySelector('.g-modal');
    backgroundModal?.addEventListener('click', closeModalIfClickOut);
    return () => {
      backgroundModal?.removeEventListener('click', closeModalIfClickOut);
    };
  }, []);

  function closeModalIfClickOut(e: Event) {
    const container = document.querySelector('.g-modal-container');
    const isClickInside = container?.contains(e.target as Node);
    if (!isClickInside) {
      const modal = document.querySelector('.g-modal') as HTMLElement;
      modal.style.setProperty('--opacity', '0');
      setTimeout(() => {
        modal.style.setProperty('--visibility', 'hidden');
      }, 200);
      setVisibilityModal(EVisibilityModal.Hidden);
      onClose?.();
    }
  }

  useEffect(() => {
    if (visibilityModal === 'visible') {
      const modal = document.querySelector('.g-modal') as HTMLElement;
      modal.style.setProperty('--visibility', 'visible');
      modal.style.setProperty('--opacity', '1');
    }
  }, [visibilityModal]);

  return (
    <div className="g-modal">
      <section className="g-modal-container">{children}</section>
    </div>
  );
};

export default Modal;
