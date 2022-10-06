import { css, Global } from "@emotion/react";
import React from "react";
import Dashboard from "./components/Dasahboard/Dashboard";
import Header from "./components/Header/Header";

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
      <Header />
      <main>
        <Dashboard />
      </main>
    </>
  );
}

export default App;
