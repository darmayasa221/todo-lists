import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ReactComponent as IconAdd } from "src/asset/svg/tabler_plus.svg";
import { ReactComponent as IconSort } from "src/asset/svg/todo-sort-button.svg";
import { Backdrop } from "src/components/Modal/Alert/Backdrop";
import Dropdown from "src/components/Dropdown/Dropdown";
import Form from "src/components/Form/Form";
import { button } from "src/components/GlobalStyle/button";
import SORT from "src/data/Sort";
import UiModalContext from "src/store/ui/modal";
import UiDropdownContext from "src/store/ui/form/dorpdown";
import ActivityTodoContext from "src/store/activityTodo";
import ActivityTodoFormHooks from "src/store/activityTodo/hooks";

const ActivityTodoButtonsWrapper = styled.div({
  display: "flex",
  position: "relative",
});
const ActivityTodoSortButton = styled.button({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "none",
  border: "none",
  margin: "0 18px",
});
const ActivityTodoAddButton = styled(button)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
const ActivityTodoButtons = () => {
  const { isModalOn, setModalOn, setModalOff } = useContext(UiModalContext);
  const { isDropdownVisible, setDropdownInvisible, setDropdownVisible } =
    useContext(UiDropdownContext);
  const { postActivityTodo } = useContext(ActivityTodoContext);
  const [
    activityTodoState,
    onInputTitle,
    onDropdownPriority,
    onSubmitActivityTodo,
  ] = ActivityTodoFormHooks(setModalOff, postActivityTodo);
  return (
    <>
      {isModalOn && (
        <>
          <Backdrop setModal={setModalOff} />
          <Form
            typeForm="add"
            onSubmit={onSubmitActivityTodo}
            titleForm="Tambah List Item"
          />
        </>
      )}
      <ActivityTodoButtonsWrapper>
        <ActivityTodoSortButton
          data-cy="todo-sort-button"
          type={"button"}
          onClick={
            isDropdownVisible ? setDropdownVisible : setDropdownInvisible
          }
        >
          <IconSort />
        </ActivityTodoSortButton>
        {isDropdownVisible && <Dropdown items={SORT} type="DROPDOWN_SORT" />}
        <ActivityTodoAddButton
          data-cy="todo-add-button"
          type={"button"}
          onClick={setModalOn}
        >
          <IconAdd />
          Tambah
        </ActivityTodoAddButton>
      </ActivityTodoButtonsWrapper>
    </>
  );
};

export default ActivityTodoButtons;
