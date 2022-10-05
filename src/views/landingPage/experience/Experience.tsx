import React from 'react';
import { experienceList } from 'src/utils/constants';

const Experience = () => {
  return (
    <div className="l-experience-container">
      {experienceList.map(({ title, rol, date, details }, index) => (
        <section
          key={index}
          className={`l-experience-item ${
            index > 0 && 'l-experience-item-border-top'
          }`}
        >
          <span className="title">{title}</span>
          <span className="rol-and-date">{`${rol} | (${date})`}</span>
          <span className="details">{details}</span>
        </section>
      ))}
    </div>
  );
};

export default Experience;
