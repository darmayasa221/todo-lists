import styled from "@emotion/styled";
import React, { Dispatch, FC, SetStateAction } from "react";
import { TypeActivity } from "../DashboardActiviy";
import Activity from "./Activity";

type TypeActivitesItemProps = {
  activitys: Array<TypeActivity>;
  setClick: Dispatch<SetStateAction<boolean>>;
};
const ActivitysItemContainer = styled.div({
  display: "grid",
  flexDirection: "column",
  width: "100%",
  gridTemplateColumns: "repeat(4, 235px)",
  gridAutoRows: "234px",
  columnGap: "20px",
  rowGap: "26px",
});
const ActivitysItem: FC<TypeActivitesItemProps> = ({ activitys, setClick }) => {
  return (
    <ActivitysItemContainer>
      {activitys.map((activity) => (
        <Activity key={activity.id} activity={activity} setClick={setClick} />
      ))}
    </ActivitysItemContainer>
  );
};

export default ActivitysItem;
