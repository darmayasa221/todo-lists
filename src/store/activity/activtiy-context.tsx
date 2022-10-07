import React, { FC, ReactNode, useEffect, useState } from "react";
import {
  TypeActivitys,
  TypeDeleteActivity,
  TypeResponseActivitys,
} from "src/types/TypeActivity";
import ActivityContext from ".";

const ActivityContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activitys, setActivitys] = useState<TypeActivitys>([]);
  const [isPostActivity, setPostActivity] = useState<boolean>(false);
  const [isDeleteActivity, setDeleteActivity] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://todo.api.devcode.gethired.id/activity-groups/?email=test@email.com"
      );
      const responseJson: TypeResponseActivitys = await response.json();
      setActivitys(responseJson.data);
    })();
    return () => {
      setPostActivity(false);
      setDeleteActivity(false);
    };
  }, [isPostActivity, isDeleteActivity]);
  const postActivity = async (): Promise<void> => {
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
    setPostActivity(true);
  };
  const deleteActivity: TypeDeleteActivity = async (
    id: number,
    setNotificationOn: () => void,
    setNotificationOff: () => void
  ): Promise<void> => {
    await fetch(` https://todo.api.devcode.gethired.id/activity-groups/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      setNotificationOff();
      setDeleteActivity(true);
    }, 200);
    setNotificationOn();
  };
  return (
    <ActivityContext.Provider
      value={{
        activitys,
        deleteActivity,
        postActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};

export default ActivityContextProvider;
