import images from 'src/assets/images';
import { ISkillList } from 'src/utils/types';

interface IProps {
  title: string;
  skillData: ISkillList[];
  selectSkill: (value: ISkillList) => void;
}

const SkillsList = ({ title, skillData }: IProps) => {
  return (
    <>
      <div className="l-skills-title-section">
        <span className="l-title">{title}</span>
      </div>
      <article className="l-skills-items">
        {skillData.map((skill, i) => (
          <div key={i} className="l-skills-item" id={`skill-${skill.id}`}>
            <div className="l-skills-icon-container">
              {skill.image.map((image, o) => (
                <img
                  key={o}
                  src={images[image]}
                  alt={image}
                  style={{ height: 40, width: 40, backgroundSize: 'contain' }}
                />
              ))}
            </div>
            <span className="l-skills-text">{skill.name}</span>
          </div>
        ))}
      </article>
    </>
  );
};

export default SkillsList;
