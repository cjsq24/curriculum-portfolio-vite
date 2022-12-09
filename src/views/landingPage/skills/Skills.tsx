import { useState, useEffect } from 'react';
import { skillList } from 'src/utils/constants';
import { ESkillsType, EVisibilityModal, ISkillList } from 'src/utils/types';
import SkillsList from 'src/views/landingPage/skills/components/SkillList';
import SkillDetail from 'src/views/landingPage/skills/components/SkillDetail';
import HeaderTitle from '../components/HeaderTitle';

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
      <HeaderTitle title="Mis habilidades profesionales" />
      <div className="l-skills-content">
        <SkillDetail
          visibilityModal={visibilityModal}
          setVisibilityModal={setVisibilityModal}
          skill={skillSelected}
        />
        <SkillsList
          title="Habilidades duras"
          skillData={skillList.filter(({ type }) => type === ESkillsType.Hard)}
          selectSkill={setSkillSelected}
        />
        <SkillsList
          title="Habilidades blandas"
          skillData={skillList.filter(({ type }) => type === ESkillsType.Soft)}
          selectSkill={setSkillSelected}
        />
        <footer>
          <span>
            Puedes pulsar sobre las habilidades para obtener detalles :)
          </span>
        </footer>
      </div>
    </section>
  );
};

export default Skills;
