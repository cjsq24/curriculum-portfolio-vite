import React, { useState, useEffect } from 'react';
import { portfolioList } from 'src/utils/constants';
import { Modal } from 'src/components';
import { EVisibilityModal, IPortfolio } from 'src/utils/types';
import PortfolioItem from './components/PortfolioItem';
import HeaderTitle from '../components/HeaderTitle';

const Portfolio: React.FC = () => {
  const [visibilityModal, setVisibilityModal] = useState(
    EVisibilityModal.Hidden
  );
  const [selectedPortfolio, setSelectedPortfolio] = useState<IPortfolio>();

  useEffect(() => {
    const buttonDetails = document.querySelectorAll(
      '.l-portfolio-card-content'
    );
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
    let parent = target.parentElement;
    while (parent?.tagName !== 'ARTICLE') {
      parent = parent!.parentElement;
    }
    const index = parent.id.split('-')[1];
    setVisibilityModal(EVisibilityModal.Visible);
    setSelectedPortfolio(portfolioList[parseInt(index)]);
  };

  return (
    <section className="l-portfolio-container">
      <HeaderTitle title="My Portfolio" />
      <Modal
        visibilityModal={visibilityModal}
        setVisibilityModal={setVisibilityModal}
      >
        {selectedPortfolio && (
          <PortfolioItem item={selectedPortfolio} isModal />
        )}
      </Modal>
      <div className="l-card-portfolio-container">
        {portfolioList.map((portfolio, i) => (
          <PortfolioItem key={i} index={i} item={portfolio} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
