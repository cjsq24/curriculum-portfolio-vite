import React, { useState, useEffect } from 'react';
import { portfolioList } from 'src/utils/constants';
import Modal from 'src/components/Modal';
import { EVisibilityModal, IPortfolio } from 'src/utils/types';
import PortfolioItem from './components/PortfolioItem';

const Portfolio: React.FC = () => {
  const [visibilityModal, setVisibilityModal] = useState(
    EVisibilityModal.Hidden
  );
  const [selectedPortfolio, setSelectedPortfolio] = useState<IPortfolio>();

  useEffect(() => {
    const buttonDetails = document.querySelectorAll('.button-details');
    buttonDetails.forEach((b) => {
      b.addEventListener('click', showModal);
    });
    return () => {
      buttonDetails.forEach((b) => {
        b.removeEventListener('click', showModal);
      });
    };
  }, []);

  const showModal = (e: Event) => {
    const target = e?.target as HTMLInputElement;
    const index = target.id.split('-')[1];
    setVisibilityModal(EVisibilityModal.Visible);
    setSelectedPortfolio(portfolioList[parseInt(index)]);
  };

  return (
    <div className="l-container-content">
      <Modal
        visibilityModal={visibilityModal}
        setVisibilityModal={setVisibilityModal}
      >
        <>{selectedPortfolio && <PortfolioItem item={selectedPortfolio} />}</>
      </Modal>
      <h1 className="l-title">My Portfolio</h1>
      <div className="l-card-portfolio-container">
        {portfolioList.map((portfolio, i) => (
          <PortfolioItem key={i} index={i} item={portfolio} showDetailButton />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
