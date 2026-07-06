import { Search, Bell, UserCircle } from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h2>Goal Dashboard</h2>

        <p>Welcome back 👋</p>
      </div>

      <div className="top-icons">
        <Search />

        <Bell />

        <UserCircle />
      </div>
    </header>
  );
}

export default Topbar;