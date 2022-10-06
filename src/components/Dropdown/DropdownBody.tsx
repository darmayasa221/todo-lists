import styled from "@emotion/styled";
import React, { FC } from "react";

type TypeDropdownBodyProps = {
  color?: string;
  title: string;
};

const DropdownTitle = styled.p({
  fontSize: "16px",
  fontWeight: "400",
  color: "#4A4A4A",
});
const DropdownBodyWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});
const DrodownColor = styled.div<Pick<TypeDropdownBodyProps, "color">>(
  ({ color }) => ({
    marginRight: "19px",
    width: "14px",
    height: "14px",
    borderRadius: "100%",
    background: color,
  })
);
const DropdownBody: FC<TypeDropdownBodyProps> = ({ color, title }) => {
  return (
    <DropdownBodyWrapper>
      <DrodownColor color={color} />
      <DropdownTitle>{title}</DropdownTitle>
    </DropdownBodyWrapper>
  );
};

export default DropdownBody;
