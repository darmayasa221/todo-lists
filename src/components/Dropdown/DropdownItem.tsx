import styled from "@emotion/styled";
import React, { FC } from "react";
import { TypeSort } from "src/data/Sort";
import { ReactComponent as IconCheck } from "src/asset/svg/check.svg";

type DropdownItemProps = TypeSort & {
  color?: string;
};
const DropdownItemWrapper = styled.li({
  cursor: "pointer",
  position: "relative",
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  height: "52px",
  padding: "22px 24px",
  border: "1px solid #E5E5E5",
});
const DropdownTitle = styled.p({
  fontSize: "16px",
  fontWeight: "400",
  color: "#4A4A4A",
});
const DropdownCheckIcon = styled(IconCheck)({
  position: "absolute",
  right: 24,
});
const DrodownIcon = styled.img({
  marginRight: "15px",
  width: "18px",
  height: "18px",
});
const DrodownColor = styled.div({});
const DropdownItem: FC<DropdownItemProps> = ({ icon, title, color }) => {
  return (
    <>
      <DropdownItemWrapper>
        {icon ? (
          <DrodownIcon src={icon} alt="icon" />
        ) : (
          <DrodownColor color={color} />
        )}
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownCheckIcon />
      </DropdownItemWrapper>
    </>
  );
};

export default DropdownItem;
