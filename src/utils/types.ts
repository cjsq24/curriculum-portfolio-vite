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
