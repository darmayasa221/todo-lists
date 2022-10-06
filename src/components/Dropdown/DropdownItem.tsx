import styled from "@emotion/styled";
import React, { FC } from "react";
import { TypeSort } from "src/data/Sort";
import { ReactComponent as IconCheck } from "src/asset/svg/check.svg";
import { TypePriority } from "src/data/Priority";
import { TypeDropdownProps } from "./Dropdown";
import DropdownBody from "./DropdownBody";

export interface IDropdownItemProps
  extends TypeSort,
    TypePriority,
    Pick<TypeDropdownProps, "type"> {
  [key: string]: any;
  typeForm?: string;
}
const DropdownItemWrapper = styled.li<Pick<IDropdownItemProps, "type">>(
  ({ type }) => ({
    cursor: "pointer",
    position: "relative",
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    height: "52px",
    padding: type === "DROPDOWN_PRIORITY" ? "19px 17px" : "22px 24px",
    justifyContent: "space-between",
    border: "1px solid #E5E5E5",
  })
);
const DropdownTitle = styled.p({
  fontSize: "16px",
  fontWeight: "400",
  color: "#4A4A4A",
});
const DropdownBodyWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});
const DropdownCheckIcon = styled(IconCheck)({});
const DrodownIcon = styled.img({
  marginRight: "15px",
  width: "18px",
  height: "18px",
});

const DropdownItem: FC<IDropdownItemProps> = ({
  icon,
  title,
  color,
  type,
  priority,
  selected,
  onChangeDropdown,
  dataCy,
  typeForm,
}) => {
  const onClick = () => {
    type === "DROPDOWN_PRIORITY"
      ? onChangeDropdown({ selectPriority: priority, color, title })
      : onChangeDropdown({ selectPriority: priority, color, title });
  };
  return (
    <>
      <DropdownItemWrapper
        onClick={onClick}
        type={type}
        data-cy={
          type === "DROPDOWN_SORT" ? dataCy : `modal-${typeForm}-priority-item`
        }
      >
        {type === "DROPDOWN_PRIORITY" ? (
          <>
            <DropdownBody color={color} title={title} />
            {selected && <DropdownCheckIcon />}
          </>
        ) : (
          <>
            <DropdownBodyWrapper>
              <DrodownIcon src={icon} alt="icon" />
              <DropdownTitle>{title}</DropdownTitle>
            </DropdownBodyWrapper>
            {selected && <DropdownCheckIcon />}
          </>
        )}
      </DropdownItemWrapper>
    </>
  );
};

export default DropdownItem;
