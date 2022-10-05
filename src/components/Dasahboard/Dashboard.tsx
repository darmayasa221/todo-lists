import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardContainer = styled.div({
  top: "105px",
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
const DashboardWrapper = styled.div({
  width: "1000px",
});
const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardWrapper>
        <Outlet />
      </DashboardWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;
