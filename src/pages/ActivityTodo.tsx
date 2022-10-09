import styled from "@emotion/styled";
import React, { MouseEventHandler, useContext } from "react";
import { ReactComponent as IconActivityTodo } from "src/asset/svg/todo-empty-state.svg";
import ActivityTodoContext from "src/store/activityTodo";
import ActivityTodos from "../components/ActivityTodo/ActivitiyItems/ActivityItems";
import HeaderActivityTodo from "../components/ActivityTodo/HeaderActivityTodo/HeaderActivityTodo";

const HeaderActivityTodoContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "49px 0",
});
const MainActivityTodo = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const IconEmptyActivityTodo = styled(IconActivityTodo)({
  cursor: "pointer",
});
const ActivityTodo = () => {
  const { activityTodos, activityTodosId, postActivityTodo } =
    useContext(ActivityTodoContext);
  return (
    <>
      <HeaderActivityTodoContainer>
        <HeaderActivityTodo activityTodosId={activityTodosId} />
      </HeaderActivityTodoContainer>
      <MainActivityTodo>
        {activityTodos.length > 0 ? (
          <ActivityTodos activityTodos={activityTodos} />
        ) : (
          <IconEmptyActivityTodo
            onClick={postActivityTodo as MouseEventHandler}
            data-cy="todo-empty-state"
          />
        )}
      </MainActivityTodo>
    </>
  );
};

export default ActivityTodo;
