export type TypeActivity = {
  [key: string]: string | number;
  id: number;
  title: string;
  created_at: string;
};
export type TypeActivitys = Array<TypeActivity>;
export type TypeResponseActivitys = {
  total: number;
  limit: number;
  skip: number;
  data: TypeActivitys;
};
export type TypeDeleteActivity = (
  id: number,
  setNotificationOn: () => void,
  setNotificationOff: () => void
) => Promise<void>;
export type TypePatchTitleActivityById = (
  title: string,
  id: number
) => Promise<void>;

export type TypeGetActivityById = (id: number) => Promise<void>;
