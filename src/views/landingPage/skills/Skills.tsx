import { useState, useEffect } from 'react';
import { skillList } from 'src/utils/constants';
import { ESkillsType, EVisibilityModal, ISkillList } from 'src/utils/types';
import SkillsList from './components/SkillsList';
import SkillDetail from './components/SkillDetail/SkillDetail';
import HeaderTitle from '../components/HeaderTitle';

console.log(skillList);

const Skills = () => {
  const [visibilityModal, setVisibilityModal] = useState(
    EVisibilityModal.Hidden
  );
  const [skillSelected, setSkillSelected] = useState<ISkillList>();

  function getSkill(e: Event) {
    const target = e?.target as HTMLElement;
    if (target.tagName === 'ARTICLE') return;
    let parent = target.parentElement;
    while (parent?.className !== 'l-skills-item') {
      parent = parent!.parentElement;
    }
    const index = parent.id.split('-')[1];
    setSkillSelected(skillList.find(({ id }) => id === parseInt(index)));
    setVisibilityModal(EVisibilityModal.Visible);
  }

  useEffect(() => {
    const skillsContainer = document.querySelectorAll(
      '.l-skills-items'
    ) as NodeListOf<HTMLElement>;
    skillsContainer[0].addEventListener('click', getSkill);
    skillsContainer[1].addEventListener('click', getSkill);

    return () => {
      skillsContainer[0].removeEventListener('click', getSkill);
      skillsContainer[1].removeEventListener('click', getSkill);
    };
  }, []);

  return (
    <section className="l-skills-container">
      <HeaderTitle title="My Professional Skills" />
      <div className="l-skills-content">
        <SkillDetail
          visibilityModal={visibilityModal}
          setVisibilityModal={setVisibilityModal}
          skill={skillSelected}
        />
        <SkillsList
          title="Hard Skills"
          skillData={skillList.filter(({ type }) => type === ESkillsType.Hard)}
          selectSkill={setSkillSelected}
        />
        <SkillsList
          title="Soft Skills"
          skillData={skillList.filter(({ type }) => type === ESkillsType.Soft)}
          selectSkill={setSkillSelected}
        />
        <footer>
          <span>Feel free to click in the skills :)</span>
        </footer>
      </div>
    </section>
  );
};

export default Skills;
