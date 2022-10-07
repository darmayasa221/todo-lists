import { createContext } from "react";
type TypeUiContext = {
  isModalOn: boolean;
  isNotificationOn: boolean;
  setModalOn: () => void;
  setModalOff: () => void;
  setNotificationOn: () => void;
  setNotificationOff: () => void;
};

const UiContext = createContext<TypeUiContext>({} as TypeUiContext);

export default UiContext;
