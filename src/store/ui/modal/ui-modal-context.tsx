import { FC, ReactNode, useState } from "react";
import UiModalContext from ".";

const UiModalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const setModalOn = (): void => setModal(true);
  const setModalOff = (): void => setModal(false);
  const setNotificationOn = (): void => setNotification(true);
  const setNotificationOff = (): void => setNotification(false);
  return (
    <UiModalContext.Provider
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
    </UiModalContext.Provider>
  );
};

export default UiModalContextProvider;
