import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as IconTrash } from "src/asset/svg/tabler_trash.svg";
const ActivityWrapper = styled.div({
  display: "flex",
  flexWrap: "wrap",
  cursor: "pointer",
  padding: "22px 26px",
  background: "#FFFFFF",
  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
});
const ActivityTitle = styled.h1({
  fontSize: "18px",
  color: "#111111",
});
const ActivityFooter = styled.div({
  width: "100%",
  alignSelf: "flex-end",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const ActivityButton = styled.button({
  cursor: "pointer",
  border: "none",
  background: "none",
  transition: "all 0.2s ease",
  ":hover": {
    transform: "scale(1.1)",
  },
});
const ActivityDate = styled.p({
  fontSize: "14px",
  color: "#888888",
  fontWeight: "500",
});
const Activity = () => {
  return (
    <ActivityWrapper data-cy="activity-card">
      <ActivityTitle data-cy="activity-item-title">Activity</ActivityTitle>
      <ActivityFooter>
        <ActivityDate data-cy="activity-item-date">
          40 oktober 2020
        </ActivityDate>
        <ActivityButton data-cy="activity-item-delete-button">
          <IconTrash />
        </ActivityButton>
      </ActivityFooter>
    </ActivityWrapper>
  );
};

export default Activity;
