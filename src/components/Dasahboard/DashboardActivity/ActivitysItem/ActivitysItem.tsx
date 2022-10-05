import styled from "@emotion/styled";
import React from "react";
import Activity from "./Activity";
const ActivitysItemContainer = styled.div({
  display: "grid",
  flexDirection: "column",
  width: "100%",
  gridTemplateColumns: "repeat(4, 235px)",
  gridAutoRows: "234px",
  columnGap: "20px",
  rowGap: "26px",
});
const ActivitysItem = () => {
  return (
    <ActivitysItemContainer>
      <Activity />
    </ActivitysItemContainer>
  );
};

export default ActivitysItem;
