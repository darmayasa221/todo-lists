import styled from "@emotion/styled";
import React, { ChangeEvent, FC, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as IconBack } from "src/asset/svg/todo-back-button.svg";
import { ReactComponent as IconEdit } from "src/asset/svg/todo-title-edit-button.svg";
import ActivityContext from "src/store/activity";
type TypeHeadingActivityTodoProps = {
  activityTodosId: number;
};
const HeadingActivityTodoWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});
const ButtonActivityTodo = styled.button({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "none",
  border: "none",
});
const LinkActivityTodo = styled(Link)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "none",
  border: "none",
});
const TitleActivityTodo = styled.h1({
  cursor: "pointer",
  fontWeight: "700",
  fontSize: "36px",
  color: "#111111",
  padding: "0 23px",
});
const InputTitleActivityTodo = styled.input({
  border: "none",
  fontSize: "36px",
  color: "#111111",
  margin: "0 23px",
  borderBottom: "1px solid black",
  ":focus": {
    outline: "none",
  },
});
const HeadingActivityTodo: FC<TypeHeadingActivityTodoProps> = ({
  activityTodosId,
}) => {
  const { state } = useLocation();
  const [activityTitle, setActivityTitle] = useState<{
    edited: string;
    default: string;
    match: boolean;
  }>({
    match: true,
    edited: state,
    default: state,
  });
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  const { patchTitleActivityById } = useContext(ActivityContext);
  const onClickEditTitle = () => {
    isEditTitle ? setIsEditTitle(false) : setIsEditTitle(true);
  };
  const onChangeActivityTitle = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const match = event.target.value === activityTitle.default;
    setActivityTitle((prev) => ({
      ...prev,
      edited: event.target.value,
      match,
    }));
  };
  const onBlurInputTitle = () => {
    patchTitleActivityById(activityTitle.edited, activityTodosId);
  };

  return (
    <>
      <HeadingActivityTodoWrapper>
        <LinkActivityTodo data-cy="todo-back-button" to={"/"}>
          <IconBack />
        </LinkActivityTodo>
        {isEditTitle ? (
          <InputTitleActivityTodo
            type={"text"}
            value={activityTitle.default}
            id="title"
            onChange={onChangeActivityTitle}
            data-cy="todo-title-edit-input"
            onBlur={onBlurInputTitle}
            autoFocus
          />
        ) : (
          <TitleActivityTodo onClick={onClickEditTitle} data-cy="todo-title">
            {activityTitle.edited}
          </TitleActivityTodo>
        )}
        <ButtonActivityTodo
          data-cy="todo-title-edit-button"
          type={"button"}
          onClick={onClickEditTitle}
        >
          <IconEdit />
        </ButtonActivityTodo>
      </HeadingActivityTodoWrapper>
    </>
  );
};

export default HeadingActivityTodo;
