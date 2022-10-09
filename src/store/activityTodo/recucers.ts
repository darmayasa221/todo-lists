type TypeInitialStateFromActivityTodo = {
  value: {
    title: string;
    priority: string;
  };
  validation: {
    inputTitle: boolean;
  };
};
export const InitialStateFromActivityTodo: TypeInitialStateFromActivityTodo = {
  value: {
    title: "",
    priority: "very-high",
  },
  validation: {
    inputTitle: false,
  },
};

type INPUT_ACTIVITY_TODO_ACTIONTYPE =
  | { type: "INPUT_TITLE"; payload: string }
  | { type: "DROPDOWN_PRIORITY"; payload: string };

const FormActivityTodoReducer = (
  state: TypeInitialStateFromActivityTodo,
  action: INPUT_ACTIVITY_TODO_ACTIONTYPE
): TypeInitialStateFromActivityTodo => {
  if (action.type === "INPUT_TITLE") {
    return {
      value: { ...state.value, title: action.payload },
      validation: {
        inputTitle: action.payload.trim().length > 0 ? true : false,
      },
    };
  }
  if (action.type === "DROPDOWN_PRIORITY") {
    return {
      value: { ...state.value, priority: action.payload },
      validation: { ...state.validation },
    };
  }
  return state;
};
export default FormActivityTodoReducer;
