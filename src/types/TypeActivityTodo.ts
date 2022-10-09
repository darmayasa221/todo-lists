export type TypeActivityTodo = {
  [key: string]: string | number;
  activity_group_id: number;
  id: string;
  is_active: number;
  priority: string;
  title: string;
};

export type TypeActivityTodos = Array<TypeActivityTodo>;
export type TypeResponseActivityTodo = {
  total: number;
  limit: number;
  skip: number;
  data: TypeActivityTodos;
};
export type TypeDeleteActivityTodo = (
  id: number,
  setNotificationOn: () => void,
  setNotificationOff: () => void
) => Promise<void>;
export type TypeEditActivityTodo = (
  value: {
    title: string;
    priority: string;
  },
  setModalOff: () => void
) => Promise<void>;
export type TypePostActivityTodo = (
  value?: {
    title: string;
    priority: string;
  },
  setModalOff?: () => void
) => Promise<void>;
