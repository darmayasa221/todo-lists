import styled from "@emotion/styled";
import React, { FC } from "react";
import { TypePriority } from "src/data/Priority";
import { TypeSort } from "src/data/Sort";
import DropdownItem from "./DropdownItem";

export type TypeDropdownProps = {
  items: Array<TypeSort | TypePriority>;
  type: "DROPDOWN_PRIORITY" | "DROPDOWN_SORT";
  onChangeDropdown?: (value: {
    selectPriority?: string;
    color?: string;
    title: string;
  }) => void;
  selectPriority?: string;
  selected?: boolean;
  title?: string;
};

const DropdownContainer = styled.div<Pick<TypeDropdownProps, "type">>(
  ({ type }) => ({
    background: "#FFFFFF",
    position: "absolute",
    width: type === "DROPDOWN_PRIORITY" ? "205px" : "235px",
    height: type === "DROPDOWN_PRIORITY" ? "none" : "260px",
    border: "1px solid #E5E5E5",
    borderRadius: "6px",
    left: type === "DROPDOWN_PRIORITY" ? -1 : 18,
    top: type === "DROPDOWN_PRIORITY" ? 45 : 60,
  })
);
const DropdownWrapper = styled.ul({});
const Dropdown: FC<TypeDropdownProps> = ({
  items,
  type,
  onChangeDropdown,
  selectPriority,
  selected,
  title,
}) => {
  return (
    <DropdownContainer type={type}>
      <DropdownWrapper>
        {items.map((item) => (
          <DropdownItem
            onChangeDropdown={onChangeDropdown}
            priority={item.priority as string}
            type={type}
            key={item.title}
            title={item.title}
            icon={item.icon as string}
            color={item.color as string}
            selected={
              type === "DROPDOWN_PRIORITY"
                ? selectPriority === item.priority
                  ? selected
                  : false
                : item.title === title
                ? selected
                : false
            }
            selectPriority={selectPriority}
          />
        ))}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
