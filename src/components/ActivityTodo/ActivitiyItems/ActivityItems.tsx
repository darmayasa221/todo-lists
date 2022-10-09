import styled from "@emotion/styled";
import React, { FC } from "react";
import { TypeActivityTodos } from "src/types/TypeActivityTodo";
import Item from "./Item";

type TypeActiviteItemsProps = {
  activityTodos: TypeActivityTodos;
};

const ActivityItemsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  rowGap: "10px",
});
const ActivityItems: FC<TypeActiviteItemsProps> = ({ activityTodos }) => {
  return (
    <ActivityItemsContainer>
      {activityTodos.map((activityTodo) => (
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
