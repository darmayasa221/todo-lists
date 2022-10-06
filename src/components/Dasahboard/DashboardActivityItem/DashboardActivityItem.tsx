import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as IconActivityItem } from "src/asset/svg/todo-empty-state.svg";
import sorter from "src/commons/sorter";
import ActivityItems from "./ActivitiyItems/ActivityItems";
import HeaderActivityItem from "./HeaderActivityItem/HeaderActivityItem";

export type TypeActivityItem = {
  [key: string]: string | number;
  activity_group_id: number;
  id: string;
  is_active: number;
  priority: string;
  title: string;
};
type TypeResponseActivityItems = {
  total: number;
  limit: number;
  skip: number;
  data: Array<TypeActivityItem>;
};

const DashboardHeaderActivityItem = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "49px 0",
});
const DashboardMainActivityItem = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const IconEmptyActivityItem = styled(IconActivityItem)({
  cursor: "pointer",
});
const DashboardActivityItem = () => {
  const { id } = useParams();
  const [sortFunction, setSortFunction] = useState<string>("Terbaru");
  const [activityItems, setActivityItems] = useState<Array<TypeActivityItem>>(
    []
  );
  const [isClick, setClick] = useState<boolean>(false);
  useEffect(() => {
    const getActivityItems = async () => {
      const response = await fetch(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`
      );
      const responseJson: TypeResponseActivityItems = await response.json();
      const data = sorter(responseJson.data, sortFunction);
      setActivityItems(data);
    };
    getActivityItems();
    return () => {
      setClick(false);
    };
  }, [isClick, id, sortFunction]);
  const postActivityItem = async () => {
    await fetch("https://todo.api.devcode.gethired.id/todo-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "activity",
        activity_group_id: Number(id),
        is_active: true,
      }),
    });
    setClick(true);
  };
  return (
    <>
      <DashboardHeaderActivityItem>
        <HeaderActivityItem
          setClick={setClick}
          setSortFunction={setSortFunction}
        />
      </DashboardHeaderActivityItem>
      <DashboardMainActivityItem>
        {activityItems.length > 0 ? (
          <ActivityItems setClick={setClick} activityItems={activityItems} />
        ) : (
          <IconEmptyActivityItem
            onClick={postActivityItem}
            data-cy="todo-empty-state"
          />
        )}
      </DashboardMainActivityItem>
    </>
  );
};

export default DashboardActivityItem;
