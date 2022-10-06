import styled from "@emotion/styled";
import React from "react";
import Modal from "../Modal/Modal";
import { ReactComponent as IconNotification } from "src/asset/svg/modal-information-icon.svg";
const Container = styled.div({
  position: "absolute",
  background: "rgba(33, 37, 41, 0.68)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 101,
});
const NotificationWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  width: "490px",
  height: "58px",
  padding: "20px 30px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
});
const NotificationDescription = styled.p({
  paddingLeft: "5px",
  fontSize: "14px",
  fontWeight: "500",
});
const NotificationAlert = () => {
  return (
    <Modal>
      <Container data-cy="modal-information">
        <NotificationWrapper>
          <IconNotification data-cy="modal-information-icon" />
          <NotificationDescription data-cy="modal-information-title">
            Activity berhasil dihapus{" "}
          </NotificationDescription>
        </NotificationWrapper>
      </Container>
    </Modal>
  );
};

export default NotificationAlert;
