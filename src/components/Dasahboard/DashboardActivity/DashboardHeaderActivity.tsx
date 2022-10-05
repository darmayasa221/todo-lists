import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as IconAdd } from "src/asset/svg/tabler_plus.svg";
import { button } from "src/components/GlobalStyle/button";

const DashboardHeadingActivity = styled.h1({
  fontSize: "36px",
  color: "#111111",
});
const DashboardButtonActivity = styled(button)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const DashboardHeaderActivity = () => {
  return (
    <>
      <DashboardHeadingActivity data-cy="activity-title">
        Activity
      </DashboardHeadingActivity>
      <DashboardButtonActivity data-cy="activity-add-button">
        <IconAdd />
        Tambah
      </DashboardButtonActivity>
    </>
  );
};

export default DashboardHeaderActivity;
