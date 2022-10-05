import { useEffect } from 'react';
import { EVisibilityModal } from 'src/utils/types';

interface IProps {
  visibilityModal: EVisibilityModal;
  setVisibilityModal: (value: EVisibilityModal) => void;
  children?: JSX.Element;
}

const Modal = ({ visibilityModal, setVisibilityModal, children }: IProps) => {
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
      document.documentElement.style.setProperty('--opacity', '0');
      setTimeout(() => {
        document.documentElement.style.setProperty('--visibility', 'hidden');
      }, 200);
      setVisibilityModal(EVisibilityModal.Hidden);
    }
  }

  useEffect(() => {
    if (visibilityModal === 'visible') {
      document.documentElement.style.setProperty('--visibility', 'visible');
      document.documentElement.style.setProperty('--opacity', '1');
    }
  }, [visibilityModal]);

  return (
    <div className="g-modal">
      <section className="g-modal-container">{children}</section>
    </div>
  );
};

export default Modal;
