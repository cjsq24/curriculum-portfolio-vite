import { useState, useEffect, useCallback } from 'react';

type TProps = {
  images?: string[];
  currentTarget: number;
  setCurrentTarget: (value: number) => void;
};

const useCarousel = ({ images, currentTarget, setCurrentTarget }: TProps) => {
  const $ = document;

  const [containerWidth, setContainerWidth] = useState(0);
  const [itemsLength, setItemsLength] = useState(0);

  useEffect(() => {
    (
      $.querySelector('.content-carousel') as HTMLElement
    ).style.transform = `translateX(-${containerWidth * currentTarget}px)`;
  }, [containerWidth, currentTarget]);

  const setWidthContent = () => {
    const containerWidth = (
      $.querySelector('.container-carousel') as HTMLElement
    ).offsetWidth;
    setContainerWidth(containerWidth);
    const itemsEle: NodeListOf<HTMLElement> =
      $.querySelectorAll('.item-carousel');
    ($.querySelector('.content-carousel') as HTMLElement).style.width = `${
      containerWidth * itemsEle.length
    }px`;
    itemsEle.forEach((ele) => {
      ele.style.width = `${containerWidth}px`;
    });
    setItemsLength(itemsEle.length);
  };

  useEffect(() => {
    setWidthContent();
  }, [images]);

  const nextElement = useCallback(() => {
    const newCurrentTarget =
      currentTarget === itemsLength - 1 ? currentTarget : currentTarget + 1;
    setCurrentTarget(newCurrentTarget);
  }, [currentTarget, containerWidth]);

  const prevElement = useCallback(() => {
    const newCurrentTarget =
      currentTarget === 0 ? currentTarget : currentTarget - 1;
    setCurrentTarget(newCurrentTarget);
  }, [currentTarget, containerWidth]);

  useEffect(() => {
    const nextButton = $.querySelector('#carousel-next') as HTMLElement;
    nextButton?.addEventListener('click', nextElement);

    const prevButton = $.querySelector('#carousel-prev') as HTMLElement;
    prevButton?.addEventListener('click', prevElement);

    return () => {
      nextButton?.removeEventListener('click', nextElement);
      prevButton?.removeEventListener('click', prevElement);
    };
  }, [prevElement, nextElement]);

  useEffect(() => {
    const resizeTranslate = () => {
      (
        $.querySelector('.content-carousel') as HTMLElement
      ).style.transform = `translateX(-${containerWidth * currentTarget}px)`;
    };
    window.addEventListener('resize', setWidthContent);
    window.addEventListener('resize', resizeTranslate);
  }, [containerWidth, currentTarget]);

  useEffect(() => {
    const backgroundModal = document.querySelector('.g-modal') as HTMLElement;
    backgroundModal.addEventListener('click', closeModalIfClickOut);
    return () => {
      backgroundModal.removeEventListener('click', closeModalIfClickOut);
    };
  }, []);

  function closeModalIfClickOut(e: Event) {
    const container = document.querySelector('.g-modal-container');
    const isClickInside = container?.contains(e.target as Node);
    if (!isClickInside) {
      (
        $.querySelector('.content-carousel') as HTMLElement
      ).style.transform = `translateX(0px)`;
      setCurrentTarget(0);
    }
  }
};

export default useCarousel;
