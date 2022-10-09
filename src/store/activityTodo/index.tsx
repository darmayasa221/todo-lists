import { createContext } from "react";
import {
  TypeActivityTodos,
  TypeDeleteActivityTodo,
  TypeEditActivityTodo,
  TypePostActivityTodo,
} from "src/types/TypeActivityTodo";

type TypeActivityTodoContext = {
  activityTodosId: number;
  activityTodos: TypeActivityTodos;
  postActivityTodo: TypePostActivityTodo | (() => Promise<void>);
  deleteActivityTodo: TypeDeleteActivityTodo;
  editActivityTodo: TypeEditActivityTodo;
  patchIsActiveActivityTodo: () => Promise<void>;
};
const ActivityTodoContext = createContext<TypeActivityTodoContext>(
  {} as TypeActivityTodoContext
);

export default ActivityTodoContext;
