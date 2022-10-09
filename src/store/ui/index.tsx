import { FC, ReactNode } from "react";
import UiDropdownContextProvider from "./form/dorpdown/ui-dropdown-context";
import UiModalContextProvider from "./modal/ui-modal-context";

const UiContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UiModalContextProvider>
      <UiDropdownContextProvider>{children}</UiDropdownContextProvider>
    </UiModalContextProvider>
  );
};

export default UiContextProvider;
