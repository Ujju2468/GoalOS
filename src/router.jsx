import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Month from "./pages/Month";
import DayPlanner from "./pages/DayPlanner";
import Resources from "./pages/Resources";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";


const routes = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/month/:month",
    element: <Month />,
  },
  {
    path: "/planner/:day",
    element: <DayPlanner />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;