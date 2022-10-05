import styled from "@emotion/styled";
import React from "react";

const HeaderWrapper = styled.header({
  zIndex: "100",
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "105px",
  background: "#16ABF8",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});
const HeaderContainer = styled.div({
  width: "1000px",
});
const HeaderHeading = styled.h1({
  fontSize: "24px",
  color: "white",
  fontWeight: "700",
  textTransform: "uppercase",
});
const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer data-cy="header-background">
        <HeaderHeading data-cy="header-title">TO DO LIST APP</HeaderHeading>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
