import styled from "@emotion/styled";
import React from "react";
import SORT from "src/data/Sort";
import DropdownItem from "./DropdownItem";

const DropdownContainer = styled.div({
  background: "white",
  position: "absolute",
  width: "235px",
  height: "260px",
  border: "1px solid #E5E5E5",
  borderRadius: "6px",
  left: 18,
  top: 60,
});
const DropdownWrapper = styled.ul({});
const Dropdown = () => {
  return (
    <DropdownContainer>
      <DropdownWrapper>
        {SORT.map((item) => (
          <DropdownItem key={item.title} title={item.title} icon={item.icon} />
        ))}
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
