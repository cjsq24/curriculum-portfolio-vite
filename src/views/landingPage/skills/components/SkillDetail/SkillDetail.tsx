import React from 'react';
import { Modal } from 'src/components';
import { EVisibilityModal, ISkillList } from 'src/utils/types';
import images from 'src/assets/images';

type TProps = {
  visibilityModal: EVisibilityModal;
  setVisibilityModal: (value: EVisibilityModal) => void;
  skill?: ISkillList;
};

const SkillDetail = ({
  visibilityModal,
  setVisibilityModal,
  skill,
}: TProps) => {
  return (
    <Modal
      visibilityModal={visibilityModal}
      setVisibilityModal={setVisibilityModal}
    >
      <header className="l-skill-header">
        <div className="l-skills-item-title">
          <div className="l-skills-icon-container">
            {skill?.image.map((image, o) => (
              <img
                key={o}
                src={images[image]}
                alt={image}
                style={{ height: 40, width: 40 }}
              />
            ))}
          </div>
          <span className="l-skills-text">{skill?.name}</span>
        </div>
      </header>
      <main>
        <p className="l-skills-detail-text">{skill?.description}</p>
      </main>
    </Modal>
  );
};

export default SkillDetail;
