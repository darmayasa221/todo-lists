import styled from "@emotion/styled";
import React, { FC } from "react";
import { button } from "../GlobalStyle/button";
import { ReactComponent as IconAlertDelete } from "src/asset/svg/modal-delete-icon.svg";
import Modal from "../Modal/Modal";

type TypeConfirmationAlertProps = {
  setModal: () => void;
  onDelete: () => Promise<void>;
  title: string;
};
const Container = styled.div({
  position: "absolute",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ConfirmationAlertWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "490px",
  height: "355px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  padding: "43px 40px",
  zIndex: 102,
});
const ConfirmationAlertHeader = styled.div({
  height: "84px",
  display: "flex",
  justifyContent: "center",
});
const ConfirmationAlertBody = styled.div({
  textAlign: "center",
});
const ConfirmationAlertFooter = styled.div({
  display: "flex",
  justifyContent: "space-between",
  height: "54px",
  padding: "0 42px",
});
const ConfirmationAlertDescription = styled.p({
  fontFamily: "Poppins",
  fontSize: "18px",
  fontWeight: "500px",
});
const ConfirmationAlertButton = styled(button)<{
  buttonType: "cancel" | "delete";
}>(({ buttonType }) => ({
  width: "150px",
  textAlign: "center",
  padding: "13px 14px",
  background: buttonType === "cancel" ? "#F4F4F4" : "#ED4C5C",
}));
const ConfirmationAlert: FC<TypeConfirmationAlertProps> = ({
  onDelete,
  setModal,
  title,
}) => {
  const onClickDelete = async () => {
    await onDelete();
    setModal();
  };
  return (
    <Modal>
      <Container>
        <ConfirmationAlertWrapper data-cy="modal-delete">
          <ConfirmationAlertHeader>
            <IconAlertDelete data-cy="modal-delete-icon" />
          </ConfirmationAlertHeader>
          <ConfirmationAlertBody>
            <ConfirmationAlertDescription data-cy="modal-delete-title">
              Apakah anda yakin menghapus activity
              <b>"{title}"?</b>
            </ConfirmationAlertDescription>
          </ConfirmationAlertBody>
          <ConfirmationAlertFooter>
            <ConfirmationAlertButton
              type={"button"}
              onClick={setModal}
              buttonType="cancel"
              data-cy="modal-delete-cancel-button"
            >
              Batal
            </ConfirmationAlertButton>
            <ConfirmationAlertButton
              type={"button"}
              onClick={onClickDelete}
              buttonType="delete"
              data-cy="modal-delete-confirm-button"
            >
              Hapus
            </ConfirmationAlertButton>
          </ConfirmationAlertFooter>
        </ConfirmationAlertWrapper>
      </Container>
    </Modal>
  );
};

export default ConfirmationAlert;
