import { FC, ReactNode, useState } from "react";
import UiContext from ".";

const UiContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const setModalOn = (): void => setModal(true);
  const setModalOff = (): void => setModal(false);
  const setNotificationOn = (): void => setNotification(true);
  const setNotificationOff = (): void => setNotification(false);
  return (
    <UiContext.Provider
      value={{
        isModalOn: modal,
        isNotificationOn: notification,
        setModalOff,
        setModalOn,
        setNotificationOff,
        setNotificationOn,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
