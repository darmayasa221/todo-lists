import styled from "@emotion/styled";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTrash } from "src/asset/svg/tabler_trash.svg";
import dateFormater from "src/commons/dateFormater";
import { Backdrop } from "src/components/Alert/Backdrop";
import ConfirmationAlert from "src/components/Alert/ConfirmationAlert";
import NotificationAlert from "src/components/Alert/NotificationAlert";
import { TypeActivity } from "../DashboardActiviy";

type TypeActivityProps = {
  activity: TypeActivity;
  setClick: Dispatch<SetStateAction<boolean>>;
};
const ActivityLink = styled(Link)({
  textDecoration: "none",
});
const ActivityWrapper = styled.div({
  boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",
  background: "#FFFFFF",
  borderRadius: "12px",
  textDecoration: "none",
  cursor: "pointer",
  display: "flex",
  flexWrap: "wrap",
  padding: "22px 26px",
});
const ActivityTitle = styled.h1({
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "18px",
  color: "#111111",
  textDecoration: "none",
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
  fontFamily: "Poppins",
  fontSize: "14px",
  color: "#888888",
  fontWeight: "500",
});
const Activity: FC<TypeActivityProps> = ({
  activity: { created_at, id, title },
  setClick,
}) => {
  const createdAtID = dateFormater(created_at);
  const [modal, setModal] = useState<boolean>(false);
  const [notification, setNotifiction] = useState<boolean>(false);
  const onClickModal = () => {
    modal ? setModal(false) : setModal(true);
  };
  const deleteActivity = async () => {
    await fetch(` https://todo.api.devcode.gethired.id/activity-groups/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      setNotifiction(false);
      setClick(true);
    }, 200);
    setNotifiction(true);
  };
  return (
    <>
      {modal && (
        <>
          <Backdrop setModal={onClickModal} />
          <ConfirmationAlert
            title={title}
            setModal={onClickModal}
            onDelete={deleteActivity}
          />
        </>
      )}
      {notification && <NotificationAlert />}
      <ActivityWrapper>
        <ActivityLink data-cy={`activity-item`} to={`detail/${id}`}>
          <ActivityTitle data-cy="activity-item-title">{title}</ActivityTitle>
        </ActivityLink>
        <ActivityFooter>
          <ActivityDate data-cy="activity-item-date">
            {createdAtID}
          </ActivityDate>
          <ActivityButton
            onClick={onClickModal}
            type={"button"}
            data-cy="activity-item-delete-button"
          >
            <IconTrash />
          </ActivityButton>
        </ActivityFooter>
      </ActivityWrapper>
    </>
  );
};

export default Activity;
