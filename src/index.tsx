import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import ActivityContextProvider from "./store/activity/activtiy-context";
import UiContextProvider from "./store/ui/ui-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UiContextProvider>
    <ActivityContextProvider>
      <RouterProvider router={routes} />
    </ActivityContextProvider>
  </UiContextProvider>
);
