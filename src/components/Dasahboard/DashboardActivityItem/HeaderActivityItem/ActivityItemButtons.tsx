import styled from "@emotion/styled";
import React, { useState } from "react";
import { ReactComponent as IconAdd } from "src/asset/svg/tabler_plus.svg";
import { ReactComponent as IconSort } from "src/asset/svg/todo-sort-button.svg";
import Dropdown from "src/components/Dropdown/Dropdown";
import { button } from "src/components/GlobalStyle/button";
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
const ActivityItemButtons = () => {
  const [isDropdownClick, setDropdownClick] = useState<boolean>(false);
  const onClickDropdown = () => {
    isDropdownClick ? setDropdownClick(false) : setDropdownClick(true);
  };
  return (
    <>
      <ActivityItemButtonsWrapper>
        <ActivityItemSortButton type={"button"} onClick={onClickDropdown}>
          <IconSort />
        </ActivityItemSortButton>
        {isDropdownClick && <Dropdown />}
        <ActivityItemAddButton>
          <IconAdd />
          Tambah
        </ActivityItemAddButton>
      </ActivityItemButtonsWrapper>
    </>
  );
};

export default ActivityItemButtons;
