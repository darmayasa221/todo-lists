export type TypeActivityTodo = {
  [key: string]: string | number;
  activity_group_id: number;
  id: string;
  is_active: number;
  priority: string;
  title: string;
};

export type TypeActivityTodos = Array<TypeActivityTodo>;
