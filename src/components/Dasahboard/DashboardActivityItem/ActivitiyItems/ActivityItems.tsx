import styled from "@emotion/styled";
import React, { Dispatch, FC, SetStateAction } from "react";
import { TypeActivityItem } from "../DashboardActivityItem";
import Item from "./Item";

type TypeActiviteItemsProps = {
  activityItems: Array<TypeActivityItem>;
  setClick: Dispatch<SetStateAction<boolean>>;
};

const ActivityItemsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  rowGap: "10px",
});
const ActivityItems: FC<TypeActiviteItemsProps> = ({
  activityItems,
  setClick,
}) => {
  return (
    <ActivityItemsContainer>
      {activityItems.map((activityItem) => (
        <Item
          setClick={setClick}
          key={activityItem.id}
          activityItem={activityItem}
        />
      ))}
    </ActivityItemsContainer>
  );
};

export default ActivityItems;
