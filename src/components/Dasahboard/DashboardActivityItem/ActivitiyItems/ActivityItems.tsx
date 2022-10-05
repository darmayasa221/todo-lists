import styled from "@emotion/styled";
import React from "react";
import Item from "./Item";

const ActivityItemsContainer = styled.div({
  display: "flex",
  width: "100%",
  rowGap: "10px",
});
const ActivityItems = () => {
  return (
    <ActivityItemsContainer>
      <Item />
    </ActivityItemsContainer>
  );
};

export default ActivityItems;
