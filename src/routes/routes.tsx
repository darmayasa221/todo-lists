import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import DashboardActivity from "src/components/Dasahboard/DashboardActivity/DashboardActiviy";
import DashboardActivityItem from "src/components/Dasahboard/DashboardActivityItem/DashboardActivityItem";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashboardActivity />,
      },
      {
        path: "/detail",
        element: <DashboardActivityItem />,
      },
    ],
  },
]);

export default routes;
