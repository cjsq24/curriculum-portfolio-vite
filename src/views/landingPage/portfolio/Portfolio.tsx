import React from 'react';
import { portfolioList } from 'src/utils/constants';

const Portfolio: React.FC = () => {
  return (
    <div className="l-container-content">
      <h1 className="l-title">My Portfolio</h1>
      <div className="l-card-portfolio-container">
        {portfolioList.map((portfolio, i) => (
          <article key={i}>
            <picture>
              <img src={portfolio?.images?.[0]} alt={portfolio.title} />
            </picture>
            <footer>
              <div>
                <span>{portfolio.title}</span>
                <button>Details</button>
              </div>
              <p>{portfolio.description}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
