export interface IQuest {
  id: number;
  title: string;
  desc: string;
}

export interface IQuestItem extends IQuest {
  open?: boolean;
}
