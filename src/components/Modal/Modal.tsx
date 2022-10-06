import React, { FC } from "react";
import { createPortal } from "react-dom";

const Modal: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {createPortal(
        children,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
