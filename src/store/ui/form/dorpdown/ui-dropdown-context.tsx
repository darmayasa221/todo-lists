import { FC, ReactNode, useState } from "react";
import UiDropdownContext from ".";

const UiDropdownContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDropdownVisible, setDropdown] = useState<boolean>(false);
  const setDropdownVisible: () => void = (): void => {
    setDropdown(true);
  };
  const setDropdownInvisible: () => void = (): void => {
    setDropdown(false);
  };
  return (
    <UiDropdownContext.Provider
      value={{
        isDropdownVisible,
        setDropdownInvisible,
        setDropdownVisible,
      }}
    >
      {children}
    </UiDropdownContext.Provider>
  );
};

export default UiDropdownContextProvider;
