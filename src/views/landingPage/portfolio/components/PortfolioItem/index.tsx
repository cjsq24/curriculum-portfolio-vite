import React from 'react';
import { IPortfolio } from 'src/utils/types';

interface IProps {
  item: IPortfolio;
  index?: number;
  showDetailButton?: boolean;
}

const PortfolioItem = ({ item, index, showDetailButton }: IProps) => {
  return (
    <article className="l-portfolio-card-content">
      <picture>
        <img src={item?.images?.[0]} alt={item.title} />
      </picture>
      <footer>
        <div>
          <span>{item.title}</span>
          {showDetailButton && (
            <button id={`portfolio-${index}`} className="button-details">
              Details
            </button>
          )}
        </div>
        <p>{item.description}</p>
      </footer>
    </article>
  );
};

export default PortfolioItem;
