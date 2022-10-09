import { createContext } from "react";
type TypeUiDropdownContext = {
  isDropdownVisible: boolean;
  setDropdownVisible: () => void;
  setDropdownInvisible: () => void;
};

const UiDropdownContext = createContext<TypeUiDropdownContext>(
  {} as TypeUiDropdownContext
);

export default UiDropdownContext;
