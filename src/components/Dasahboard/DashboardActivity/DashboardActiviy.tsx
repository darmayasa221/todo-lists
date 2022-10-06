import React, { useEffect, useState } from "react";
import { ReactComponent as IconActivity } from "src/asset/svg/activity-empty-state.svg";
import styled from "@emotion/styled";
import DashboardHeaderActivity from "./DashboardHeaderActivity";
import ActivitysItem from "./ActivitysItem/ActivitysItem";

export type TypeActivity = {
  [key: string]: string | number;
  id: number;
  title: string;
  created_at: string;
};
type TypeResponseActivity = {
  total: number;
  limit: number;
  skip: number;
  data: Array<TypeActivity>;
};
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
  const [activitys, setActivitys] = useState<Array<TypeActivity>>([]);
  const [isClick, setClick] = useState<boolean>(false);
  useEffect(() => {
    const getActivitys = async () => {
      const response = await fetch(
        "https://todo.api.devcode.gethired.id/activity-groups/?email=test@email.com"
      );
      const responseJson: TypeResponseActivity = await response.json();
      setActivitys(responseJson.data);
    };
    getActivitys();
    return () => {
      setClick(false);
    };
  }, [isClick]);
  const postActivity = async () => {
    await fetch("https://todo.api.devcode.gethired.id/activity-groups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "New Activity",
        email: "test@email.com",
      }),
    });
    setClick(true);
  };
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderActivity postActivity={postActivity} />
      </DashboardHeader>
      <DashboardMain>
        {activitys?.length > 0 ? (
          <ActivitysItem activitys={activitys} setClick={setClick} />
        ) : (
          <DashboardIconEmptyActivity
            onClick={postActivity}
            data-cy="activity-empty-state"
          />
        )}
      </DashboardMain>
    </>
  );
};

export default DashboardActivity;
