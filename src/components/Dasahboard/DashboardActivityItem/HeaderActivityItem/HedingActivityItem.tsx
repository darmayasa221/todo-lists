import styled from "@emotion/styled";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as IconBack } from "src/asset/svg/todo-back-button.svg";
import { ReactComponent as IconEdit } from "src/asset/svg/todo-title-edit-button.svg";

const HeadingActivityItemWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});
const ButtonActivityItem = styled.button({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "none",
  border: "none",
});
const LinkActivityItem = styled(Link)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  background: "none",
  border: "none",
});
const TitleActivityItem = styled.h1({
  fontWeight: "700",
  fontSize: "36px",
  color: "#111111",
  padding: "0 23px",
});
const InputTitleActivityItem = styled.input({
  border: "none",
  fontSize: "36px",
  color: "#111111",
  margin: "0 23px",
  borderBottom: "1px solid black",
  ":focus": {
    outline: "none",
  },
});
const HeadingActivityItem = () => {
  const { id } = useParams();
  const [title, setTitle] = useState<{
    edited: string;
    default: string;
    match: boolean;
  }>({
    match: true,
    edited: "",
    default: "",
  });
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/${id}`
      );
      const { title }: { title: string } = await response.json();
      setTitle((prev) => ({ ...prev, default: title, edited: title }));
    };
    getData();
  }, [id]);
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  useEffect(() => {
    if (!title.match) {
      const patchTitle = async () => {
        await fetch(
          `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title.edited,
            }),
          }
        );
      };
      patchTitle();
    }
  }, [id, title]);
  const onClickEditTitle = () => {
    isEditTitle ? setIsEditTitle(false) : setIsEditTitle(true);
  };
  const onChangeActivityTitle = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const match = event.target.value === title.default;
    setTitle((prev) => ({
      ...prev,
      edited: event.target.value,
      match,
    }));
  };
  return (
    <>
      <HeadingActivityItemWrapper>
        <LinkActivityItem data-cy="todo-back-button" to={"/"}>
          <IconBack />
        </LinkActivityItem>
        {isEditTitle ? (
          <InputTitleActivityItem
            type={"text"}
            value={title.edited}
            id="title"
            onChange={onChangeActivityTitle}
          />
        ) : (
          <TitleActivityItem data-cy="todo-title">
            {title.edited}
          </TitleActivityItem>
        )}
        <ButtonActivityItem
          data-cy="todo-edit-button"
          type={"button"}
          onClick={onClickEditTitle}
        >
          <IconEdit />
        </ButtonActivityItem>
      </HeadingActivityItemWrapper>
    </>
  );
};

export default HeadingActivityItem;
