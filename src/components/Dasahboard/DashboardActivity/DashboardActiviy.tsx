import React from "react";
import { ReactComponent as IconActivity } from "src/asset/svg/activity-empty-state.svg";
import styled from "@emotion/styled";
import DashboardHeaderActivity from "./DashboardHeaderActivity";
import ActivitysItem from "./ActivitysItem/ActivitysItem";
const DashboardHeader = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "49px 0",
});
const DashboardMain = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const DashboardIconEmptyActivity = styled(IconActivity)({
  cursor: "pointer",
});
const DashboardActivity = () => {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderActivity />
      </DashboardHeader>
      <DashboardMain>
        {/* <DashboardIconEmptyActivity data-cy="activity-empty-state" /> */}
        <ActivitysItem />
      </DashboardMain>
    </>
  );
};

export default DashboardActivity;
