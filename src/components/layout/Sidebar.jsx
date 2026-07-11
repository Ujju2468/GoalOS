import { NavLink } from "react-router-dom";
      import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  CalendarDays,
  Target,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Calendar",
    icon: CalendarDays,
    path: "/month/january",
  },
  {
    title: "Goals",
    icon: Target,
    path: "/dashboard",
  },
  {
    title: "Resources",
    icon: BookOpen,
    path: "/resources",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* <div className="logo">
        Goal<span>OS</span>
      </div> */}
      <Link
    to="/dashboard"
    className="logo"
>
    GoalOS
</Link>

      <nav>
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav active" : "nav"
              }
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;