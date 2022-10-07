import styled from "@emotion/styled";
import React, { FC } from "react";
import { TypeActivitys } from "src/types/TypeActivity";
import Activity from "./Activity";

type TypeActivitesProps = {
  activitys: TypeActivitys;
};
const ActivitysContainer = styled.div({
  display: "grid",
  flexDirection: "column",
  width: "100%",
  gridTemplateColumns: "repeat(4, 235px)",
  gridAutoRows: "234px",
  columnGap: "20px",
  rowGap: "26px",
});
const Activitys: FC<TypeActivitesProps> = ({ activitys }) => {
  return (
    <ActivitysContainer>
      {activitys.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </ActivitysContainer>
  );
};

export default Activitys;
