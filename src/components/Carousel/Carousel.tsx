import { useState } from 'react';
import useCarousel from './hooks/useCarousel';
import 'src/assets/css/carouselStyles.css';
import Arrow from './components/Arrow';
import { EDirection } from './components/Arrow/Arrow';
import Dots from './components/Dots/Dots';

type TProps = {
  images?: string[];
};

const Carousel = ({ images }: TProps) => {
  const [currentTarget, setCurrentTarget] = useState(0);
  useCarousel({ images, currentTarget, setCurrentTarget });

  return (
    <div className="container-carousel">
      <div className="content-carousel">
        {images?.map((image, idx) => (
          <div key={idx} className="item-carousel">
            <img src={image} className="image-carousel" />
          </div>
        ))}
      </div>
      <Dots
        totalDots={images?.length ? images.length - 1 : 0}
        active={currentTarget}
        selectDot={setCurrentTarget}
      />
      <button
        id="carousel-prev"
        className={currentTarget === 0 ? 'opacity-0' : undefined}
      >
        <Arrow direction={EDirection.left} />
      </button>
      <button
        id={`carousel-next`}
        className={
          currentTarget === (images?.length || 0) - 1 ? 'opacity-0' : undefined
        }
      >
        <Arrow direction={EDirection.right} />
      </button>
    </div>
  );
};

export default Carousel;
