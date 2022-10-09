import { createContext } from "react";
type TypeUiModalContext = {
  isModalOn: boolean;
  isNotificationOn: boolean;
  setModalOn: () => void;
  setModalOff: () => void;
  setNotificationOn: () => void;
  setNotificationOff: () => void;
};

const UiModalContext = createContext<TypeUiModalContext>(
  {} as TypeUiModalContext
);

export default UiModalContext;
