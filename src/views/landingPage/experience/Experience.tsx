import React from 'react';
import { experienceList } from 'src/utils/constants';
import HeaderTitle from '../components/HeaderTitle';
import ExperienceCard from './components/ExperienceCard';

const Experience = () => {
  return (
    <section className="l-experience-container">
      <HeaderTitle title="Mi experiencia de trabajo" />
      <article className="l-experience-content">
        {experienceList.map((exp, idx) => (
          <React.Fragment key={idx}>
            <div className="l-experience-center show-f-sm">
              <div className="l-experience-date show-sm">{exp.date}</div>
            </div>
            {(idx === 0 || idx % 2 === 0) && (
              <ExperienceCard experience={exp} orientation="left" />
            )}
            <div
              className={`l-experience-center ${
                idx % 2 !== 0 && 'l-2l'
              } hidden-sm`}
            >
              <div className="l-experience-line" />
              <span className="l-experience-date">{exp.date}</span>
            </div>
            {idx % 2 !== 0 && (
              <ExperienceCard experience={exp} orientation="right" />
            )}
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default Experience;
