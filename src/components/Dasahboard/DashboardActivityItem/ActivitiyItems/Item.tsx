import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as IconTrash } from "src/asset/svg/tabler_trash.svg";
import { ReactComponent as IconEdit } from "src/asset/svg/todo-title-edit-button.svg";

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
});
const ItemCollor = styled.div({
  borderRadius: "100%",
  background: "red",
  width: "9px",
  height: "9px",
  margin: "0 16px 0 22px",
});
const ItemEditButton = styled.button({
  border: "none",
  background: "none",
  cursor: "pointer",
  marginLeft: "19px",
});
const ItemTitle = styled.h1({
  fontWeight: "500",
  fontSize: "18px",
  color: "#111111",
});
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

const Item = () => {
  return (
    <ItemWrapper data-cy="activity-card">
      <ItemBody>
        <ItemCheckbox type="checkbox" />
        <ItemCollor />
        <ItemTitle data-cy="activity-item-title">Activity</ItemTitle>
        <ItemEditButton>
          <IconEdit />
        </ItemEditButton>
      </ItemBody>
      <ItemFooter>
        <ItemRemoveButton data-cy="activity-item-delete-button">
          <IconTrash />
        </ItemRemoveButton>
      </ItemFooter>
    </ItemWrapper>
  );
};

export default Item;
