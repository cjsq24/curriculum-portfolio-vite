import React from 'react';
import { IPortfolio } from 'src/utils/types';
import { Carousel } from 'src/components';

interface IProps {
  item: IPortfolio;
  index?: number;
  isModal?: boolean;
}

const PortfolioItem = ({ item, index, isModal }: IProps) => {
  return (
    <article
      className={`l-portfolio-card-content ${isModal && 'no-selectable'}`}
      id={`portfolio-${index}`}
    >
      <picture>
        {isModal && <Carousel images={item.images} />}
        {!isModal && <img src={item?.images?.[0]} alt={item.title} />}
      </picture>
      <footer>
        <div>
          <span>{item.title}</span>
        </div>
        <p>{item.description}</p>
      </footer>
    </article>
  );
};

export default PortfolioItem;
