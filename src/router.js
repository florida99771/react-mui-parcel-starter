import { createBrowserRouter } from "react-router";

import Dashboard from "./pages/dashboard";
import Index from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
