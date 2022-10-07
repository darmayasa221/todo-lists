import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Outlet } from "react-router-dom";
const HeaderWrapper = styled.header({
  zIndex: 10,
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
  fontFamily: "Poppins",
  fontSize: "24px",
  color: "#FFFFFF",
  fontWeight: "700",
  textTransform: "uppercase",
});
const DashboardContainer = styled.div({
  top: "105px",
  position: "relative",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
const DashboardWrapper = styled.div({
  width: "1000px",
});

function App() {
  return (
    <>
      <Global
        styles={css({
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "Poppins, sans-serif",
          },
          main: {
            width: "100%",
            height: "100vh",
          },
        })}
      />
      <HeaderWrapper data-cy="header-background">
        <HeaderContainer>
          <HeaderHeading data-cy="header-title">TO DO LIST APP</HeaderHeading>
        </HeaderContainer>
      </HeaderWrapper>
      <main>
        <DashboardContainer>
          <DashboardWrapper>
            <Outlet />
          </DashboardWrapper>
        </DashboardContainer>
      </main>
    </>
  );
}

export default App;
// reducer contex
