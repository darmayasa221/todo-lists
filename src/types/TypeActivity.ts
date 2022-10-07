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
