import React, { FC } from "react";
import ActivityTodoButtons from "./ActivityTodoButtons";
import HeadingActivityTodo from "./HedingActivityTodo";
type TypeHeaderActivityTodoProps = {
  activityTodosId: number;
};

const HeaderActivityTodo: FC<TypeHeaderActivityTodoProps> = ({
  activityTodosId,
}) => {
  return (
    <>
      <HeadingActivityTodo activityTodosId={activityTodosId} />
      <ActivityTodoButtons />
    </>
  );
};

export default HeaderActivityTodo;
