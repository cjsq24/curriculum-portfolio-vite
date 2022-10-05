export enum ESkillsType {
  Hard = 'hard',
  Soft = 'soft',
}

export interface ISkillList {
  image: string[];
  name: string;
  description: string;
  type: ESkillsType;
}

export interface IPortfolio {
  title: string;
  images?: string[];
  description: string;
}

export enum EVisibilityModal {
  Hidden = 'hidden',
  Visible = 'visible',
}

export interface IExperienceList {
  title: string;
  rol: string;
  date: string;
  details: string;
}
