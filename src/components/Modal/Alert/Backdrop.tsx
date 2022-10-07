import styled from "@emotion/styled";
import React, { FC } from "react";
import ModalBackdrop from "../ModalBackdrop";

type TypeBackdropProps = {
  setModal: () => void;
};

const BackdropFull = styled.div({
  top: 0,
  zIndex: 100,
  position: "absolute",
  background: "rgba(33, 37, 41, 0.68)",
  width: "100%",
  height: "100vh",
});

export const Backdrop: FC<TypeBackdropProps> = ({ setModal }) => {
  return (
    <ModalBackdrop>
      <BackdropFull onClick={setModal} />
    </ModalBackdrop>
  );
};
