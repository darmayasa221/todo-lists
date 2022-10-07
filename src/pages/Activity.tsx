import React, { useContext } from "react";
import { ReactComponent as IconActivity } from "src/asset/svg/activity-empty-state.svg";
import styled from "@emotion/styled";
import ActivityContext from "src/store/activity";
import HeaderActivity from "src/components/Activity/HeaderActivity";
import Activitys from "src/components/Activity/Activitys/Activitys";

const HeaderActivityContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "49px 0",
});
const MainActivity = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const IconEmptyActivity = styled(IconActivity)({
  cursor: "pointer",
});
const Activity = () => {
  const { activitys, postActivity } = useContext(ActivityContext);
  return (
    <>
      <HeaderActivityContainer>
        <HeaderActivity />
      </HeaderActivityContainer>
      <MainActivity>
        {activitys?.length > 0 ? (
          <Activitys activitys={activitys} />
        ) : (
          <IconEmptyActivity
            onClick={postActivity}
            data-cy="activity-empty-state"
          />
        )}
      </MainActivity>
    </>
  );
};

export default Activity;
