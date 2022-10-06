import styled from "@emotion/styled";
import React, { FC } from "react";
import { ReactComponent as IconAdd } from "src/asset/svg/tabler_plus.svg";
import { button } from "src/components/GlobalStyle/button";
type TypeDashboardHeaderActivityProps = {
  postActivity: () => Promise<void>;
};
const DashboardHeadingActivity = styled.h1({
  fontFamily: "Poppins",
  fontSize: "36px",
  color: "#111111",
  fontWeight: "700",
});
const DashboardButtonActivity = styled(button)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const DashboardHeaderActivity: FC<TypeDashboardHeaderActivityProps> = ({
  postActivity,
}) => {
  return (
    <>
      <DashboardHeadingActivity data-cy="activity-title">
        Activity
      </DashboardHeadingActivity>
      <DashboardButtonActivity
        type={"button"}
        onClick={postActivity}
        data-cy="activity-add-button"
      >
        <IconAdd />
        Tambah
      </DashboardButtonActivity>
    </>
  );
};

export default DashboardHeaderActivity;
