import { createBrowserRouter } from "react-router-dom";
import App from "src/App";
import Activity from "src/pages/Activity";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Activity />,
      },
      // {
      //   path: "/detail/:id",
      //   element: <DashboardActivityItem />,
      // },
    ],
  },
]);

export default routes;
