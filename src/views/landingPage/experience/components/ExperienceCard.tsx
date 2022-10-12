import React from 'react';
import { IExperienceList } from 'src/utils/types';

type TProps = {
  experience: IExperienceList;
  orientation: 'right' | 'left';
};

const ExperienceCard = ({ experience, orientation }: TProps) => {
  return (
    <div className={`l-experience-card l-experience-card-${orientation}`}>
      <h2>{experience.title}</h2>
      <p>{experience.details}</p>
      <div
        className={`l-experience-arrow l-experience-${
          orientation === 'right' ? 'left' : 'right'
        }-arrow`}
      />
    </div>
  );
};

export default ExperienceCard;
