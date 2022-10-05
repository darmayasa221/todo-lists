import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as IconActivityItem } from "src/asset/svg/todo-empty-state.svg";
import Item from "./ActivitiyItems/Item";

import HeaderActivityItem from "./HeaderActivityItem/HeaderActivityItem";

const DashboardHeaderActivityItem = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "49px 0",
});
const DashboardMainActivityItem = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const IconEmptyActivityItem = styled(IconActivityItem)({
  cursor: "pointer",
});

const DashboardActivityItem = () => {
  return (
    <>
      <DashboardHeaderActivityItem>
        <HeaderActivityItem />
      </DashboardHeaderActivityItem>
      <DashboardMainActivityItem>
        <Item />
        {/* <IconEmptyActivityItem data-cy="activity-empty-state" /> */}
      </DashboardMainActivityItem>
    </>
  );
};

export default DashboardActivityItem;
