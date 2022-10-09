import { useReducer } from "react";
import { TypePostActivityTodo } from "src/types/TypeActivityTodo";
import FormActivityTodoReducer, {
  InitialStateFromActivityTodo,
} from "./recucers";

const ActivityTodoFormHooks = (
  setModalOff: () => void,
  postActivityTodo: TypePostActivityTodo
) => {
  const [activityTodoState, dispatch] = useReducer(
    FormActivityTodoReducer,
    InitialStateFromActivityTodo
  );
  const onInputTitle: (value: string) => void = (value: string) => {
    dispatch({ type: "INPUT_TITLE", payload: value });
  };
  const onDropdownPriority: (value: string) => void = (value: string) => {
    dispatch({ type: "DROPDOWN_PRIORITY", payload: value });
  };
  const onSubmitActivityTodo: () => Promise<void> = async (): Promise<void> => {
    await postActivityTodo(activityTodoState.value, setModalOff);
  };
  return [
    activityTodoState,
    onInputTitle,
    onDropdownPriority,
    onSubmitActivityTodo,
  ] as const;
};

export default ActivityTodoFormHooks;
