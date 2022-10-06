import React, { FC } from "react";
import { createPortal } from "react-dom";

const ModalBackdrop: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {createPortal(
        children,
        document.getElementById("modal-backdrop") as HTMLElement
      )}
    </>
  );
};

export default ModalBackdrop;
