import styled from "@emotion/styled";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconAdd } from "src/asset/svg/tabler_plus.svg";
import { ReactComponent as IconSort } from "src/asset/svg/todo-sort-button.svg";
import { Backdrop } from "src/components/Alert/Backdrop";
import Dropdown from "src/components/Dropdown/Dropdown";
import Form from "src/components/Form/Form";
import { button } from "src/components/GlobalStyle/button";
import SORT from "src/data/Sort";

type TypeActivityItemButtonsProps = {
  setClick: Dispatch<SetStateAction<boolean>>;
  setSortFunction: Dispatch<SetStateAction<string>>;
};
const ActivityItemButtonsWrapper = styled.div({
  display: "flex",
  position: "relative",
});
const ActivityItemSortButton = styled.button({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "none",
  border: "none",
  margin: "0 18px",
});
const ActivityItemAddButton = styled(button)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
const ActivityItemButtons: FC<TypeActivityItemButtonsProps> = ({
  setClick,
  setSortFunction,
}) => {
  const { id } = useParams();
  const [isDropdownClick, setDropdownClick] = useState<{
    visible: boolean;
    title: string;
    selected: boolean;
  }>({
    visible: false,
    title: "Terbaru",
    selected: true,
  });
  const [modal, setModal] = useState<boolean>(false);
  const onClickModal = () => {
    modal ? setModal(false) : setModal(true);
  };
  const onClickDropdown = () => {
    isDropdownClick.visible
      ? setDropdownClick((prev) => ({ ...prev, visible: false }))
      : setDropdownClick((prev) => ({ ...prev, visible: true }));
  };
  const onChangeDropdown = (value: { title: string }) => {
    setDropdownClick((prev) => ({ ...prev, ...value }));
    setSortFunction(value.title);
  };
  const postActivityItem = async (activity: {
    priority: string | undefined;
    title: string;
  }) => {
    await fetch("https://todo.api.devcode.gethired.id/todo-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...activity,
        activity_group_id: Number(id),
        is_active: true,
      }),
    });
    setClick(true);
    setModal(false);
  };
  return (
    <>
      {modal && (
        <>
          <Backdrop setModal={onClickModal} />
          <Form
            typeForm="add"
            onSubmit={postActivityItem}
            setModal={onClickModal}
            titleForm="Tambah List Item"
          />
        </>
      )}
      <ActivityItemButtonsWrapper>
        <ActivityItemSortButton
          data-cy="todo-sort-button"
          type={"button"}
          onClick={onClickDropdown}
        >
          <IconSort />
        </ActivityItemSortButton>
        {isDropdownClick.visible && (
          <Dropdown
            items={SORT}
            type="DROPDOWN_SORT"
            onChangeDropdown={onChangeDropdown}
            title={isDropdownClick.title}
            selected={isDropdownClick.selected}
          />
        )}
        <ActivityItemAddButton
          data-cy="todo-add-button"
          type={"button"}
          onClick={onClickModal}
        >
          <IconAdd />
          Tambah
        </ActivityItemAddButton>
      </ActivityItemButtonsWrapper>
    </>
  );
};

export default ActivityItemButtons;
