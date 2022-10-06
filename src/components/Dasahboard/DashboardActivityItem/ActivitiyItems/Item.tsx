import styled from "@emotion/styled";
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
} from "react";
import { ReactComponent as IconTrash } from "src/asset/svg/tabler_trash.svg";
import { ReactComponent as IconEdit } from "src/asset/svg/todo-title-edit-button.svg";
import { Backdrop } from "src/components/Alert/Backdrop";
import ConfirmationAlert from "src/components/Alert/ConfirmationAlert";
import NotificationAlert from "src/components/Alert/NotificationAlert";
import Form from "src/components/Form/Form";
import Priority from "src/data/Priority";
import { TypeActivityItem } from "../DashboardActivityItem";

type TypeItemProps = {
  activityItem: TypeActivityItem;
  setClick: Dispatch<SetStateAction<boolean>>;
};
const ItemWrapper = styled.div({
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  padding: "26px 28px",
  background: "#FFFFFF",
  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
});
const ItemBody = styled.div({
  display: "flex",
  alignItems: "center",
});
const ItemCheckbox = styled.input({
  cursor: "pointer",
  width: "20px",
  height: "20px",
  background: "#FFFFFF",
  border: "1px solid #C7C7C7",
  ":checked": {
    background: "#16ABF8",
    border: "1px solid #16ABF8",
  },
});
const ItemCollor = styled.div<{ color: string }>(({ color }) => ({
  borderRadius: "100%",
  background: color,
  width: "9px",
  height: "9px",
  margin: "0 16px 0 22px",
}));
const ItemEditButton = styled.button({
  border: "none",
  background: "none",
  cursor: "pointer",
  marginLeft: "19px",
});
const ItemTitle = styled.h1<{ isActive: boolean }>(({ isActive }) => ({
  fontWeight: "500",
  fontSize: "18px",
  color: isActive ? "#888888" : "#111111",
  textDecoration: isActive ? "line-through" : "none",
}));
const ItemFooter = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const ItemRemoveButton = styled.button({
  cursor: "pointer",
  border: "none",
  background: "none",
  transition: "all 0.2s ease",
  ":hover": {
    transform: "scale(1.1)",
  },
});

const Item: FC<TypeItemProps> = ({
  activityItem: { id, is_active, priority, title },
  setClick,
}) => {
  const itemPriority = Priority.find((item) => item.priority === priority);
  const [modalConfirmation, setModalConfirmation] = useState<boolean>(false);
  const [modalForm, setModalForm] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(
    is_active === 1 ? true : false
  );
  const [notification, setNotifiction] = useState<boolean>(false);
  const onClickModalConfirmation = () => {
    modalConfirmation
      ? setModalConfirmation(false)
      : setModalConfirmation(true);
  };
  const onClickModalForm = () => {
    modalForm ? setModalForm(false) : setModalForm(true);
  };
  const patchActiveActivityItem = async (is_active: boolean | number) => {
    await fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        is_active: is_active,
      }),
    });
  };
  const deleteActivityItem = async () => {
    await fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      setNotifiction(false);
      setClick(true);
    }, 200);
    setNotifiction(true);
  };
  const editActivityItem = async (activity: {
    priority: string | undefined;
    title: string;
  }) => {
    await fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...activity }),
    });
    setClick(true);
    setModalForm(false);
  };
  const onChangeCheckbox = async (event: ChangeEvent<HTMLInputElement>) => {
    const is_active: boolean | number = event.target.checked ? 1 : false;
    await patchActiveActivityItem(is_active);
    setActive(!isActive);
  };

  return (
    <>
      {modalForm && (
        <Form
          typeForm="edit"
          onSubmit={editActivityItem}
          setModal={onClickModalForm}
          titleForm="Edit List Item"
          titileActivityItem={title}
          priority={priority}
        />
      )}
      {modalConfirmation && (
        <>
          <Backdrop setModal={onClickModalConfirmation} />
          <ConfirmationAlert
            title={title}
            setModal={onClickModalConfirmation}
            onDelete={deleteActivityItem}
          />
        </>
      )}
      {notification && <NotificationAlert />}
      <ItemWrapper data-cy={`todo-item`}>
        <ItemBody>
          <ItemCheckbox
            data-cy="todo-item-checkbox"
            type="checkbox"
            checked={isActive}
            onChange={onChangeCheckbox}
          />
          <ItemCollor
            data-cy="todo-item-priority-indicator"
            color={itemPriority?.color as string}
          />
          <ItemTitle isActive={isActive} data-cy="todo-item-title">
            {title}
          </ItemTitle>
          <ItemEditButton
            data-cy="todo-item-edit-button"
            type={"button"}
            onClick={onClickModalForm}
          >
            <IconEdit />
          </ItemEditButton>
        </ItemBody>
        <ItemFooter>
          <ItemRemoveButton
            data-cy="todo-item-delete-button"
            type={"button"}
            onClick={onClickModalConfirmation}
          >
            <IconTrash />
          </ItemRemoveButton>
        </ItemFooter>
      </ItemWrapper>
    </>
  );
};

export default Item;
