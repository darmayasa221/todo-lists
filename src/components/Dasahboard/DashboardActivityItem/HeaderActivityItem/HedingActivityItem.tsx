import styled from "@emotion/styled";
import React, { useState } from "react";
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
const TitleActivityItem = styled.h1({
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
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  const onClickEditTitle = () => {
    isEditTitle ? setIsEditTitle(false) : setIsEditTitle(true);
  };
  return (
    <>
      <HeadingActivityItemWrapper>
        <ButtonActivityItem>
          <IconBack />
        </ButtonActivityItem>
        {isEditTitle ? (
          <InputTitleActivityItem />
        ) : (
          <TitleActivityItem data-cy="activity-title">
            Activity
          </TitleActivityItem>
        )}
        <ButtonActivityItem type={"button"} onClick={onClickEditTitle}>
          <IconEdit />
        </ButtonActivityItem>
      </HeadingActivityItemWrapper>
    </>
  );
};

export default HeadingActivityItem;
