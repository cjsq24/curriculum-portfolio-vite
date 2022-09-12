import { skillList } from 'src/utils/constants';
import { ESkillsType } from 'src/utils/types';
import SkillsList from './components/SkillsList';

const Skills = () => {
  return (
    <div className="l-skills-content">
      <SkillsList
        title="Hard Skills"
        skillData={skillList.filter(({ type }) => type === ESkillsType.Hard)}
      />
      <SkillsList
        title="Soft Skills"
        skillData={skillList.filter(({ type }) => type === ESkillsType.Soft)}
      />
      <footer>
        <span>Feel free to click in the skills :)</span>
      </footer>
    </div>
  );
};

export default Skills;
