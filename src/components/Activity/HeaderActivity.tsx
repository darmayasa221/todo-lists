import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ReactComponent as IconAdd } from "src/asset/svg/tabler_plus.svg";
import { button } from "src/components/GlobalStyle/button";
import ActivityContext from "src/store/activity";

const HeadingActivity = styled.h1({
  fontFamily: "Poppins",
  fontSize: "36px",
  color: "#111111",
  fontWeight: "700",
});
const ButtonActivity = styled(button)({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const HeaderActivity = () => {
  const { postActivity } = useContext(ActivityContext);
  return (
    <>
      <HeadingActivity data-cy="activity-title">Activity</HeadingActivity>
      <ButtonActivity
        type={"button"}
        onClick={postActivity}
        data-cy="activity-add-button"
      >
        <IconAdd />
        Tambah
      </ButtonActivity>
    </>
  );
};

export default HeaderActivity;
