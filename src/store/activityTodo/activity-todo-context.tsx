import { FC, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  TypeActivityTodos,
  TypeDeleteActivityTodo,
  TypeEditActivityTodo,
  TypePostActivityTodo,
  TypeResponseActivityTodo,
} from "src/types/TypeActivityTodo";
import ActivityTodoContext from ".";

const ActivityTodoContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { id } = useParams();
  const [activityTodos, setActivityTodos] = useState<TypeActivityTodos>([]);
  const [isPostActivityTodo, setPostActivityTodo] = useState<boolean>(false);
  const [isDeleteActivityTodo, setDeleteActivityTodo] =
    useState<boolean>(false);
  const [isPatchActivityTodo, setPatchActivityTodo] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${id}`
      );
      const responseJson: TypeResponseActivityTodo = await response.json();
      setActivityTodos(responseJson.data);
    })();
    return () => {
      setPostActivityTodo(false);
      setDeleteActivityTodo(false);
      setPatchActivityTodo(false);
    };
  }, [id, isPatchActivityTodo, isDeleteActivityTodo, isPostActivityTodo]);
  const postActivityTodo: TypePostActivityTodo = async (
    value,
    setModalOff
  ): Promise<void> => {
    if (value !== undefined && setModalOff !== undefined) {
      await fetch("https://todo.api.devcode.gethired.id/todo-items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...value,
          activity_group_id: Number(id),
          is_active: true,
        }),
      });
      setPostActivityTodo(true);
      setModalOff();
    } else {
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
      setPostActivityTodo(true);
    }
  };
  const deleteActivityTodo: TypeDeleteActivityTodo = async (
    id: number,
    setNotificationOn: () => void,
    setNotificationOff: () => void
  ): Promise<void> => {
    await fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      setNotificationOff();
      setDeleteActivityTodo(true);
    }, 200);
    setNotificationOn();
  };
  const editActivityTodo: TypeEditActivityTodo = async (
    value,
    setModalOff
  ): Promise<void> => {
    await fetch(`https://todo.api.devcode.gethired.id/todo-items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...value }),
    });
    setPatchActivityTodo(true);
    setModalOff();
  };
  const patchIsActiveActivityTodo: () => Promise<void> = async () => {};
  return (
    <ActivityTodoContext.Provider
      value={{
        activityTodosId: Number(id),
        activityTodos,
        postActivityTodo,
        deleteActivityTodo,
        editActivityTodo,
        patchIsActiveActivityTodo,
      }}
    >
      {children}
    </ActivityTodoContext.Provider>
  );
};

export default ActivityTodoContextProvider;
