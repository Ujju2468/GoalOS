import SearchBar from "../search/SearchBar";
import {  Bell, UserCircle } from "lucide-react";



function Topbar() {
  return (
    <header className="topbar">
      <div>
        <h2>Goal Dashboard</h2>

        <p>Come true your goals by staying consistent.</p>
      </div>

      <div className="top-icons">
        <SearchBar/>
        <Bell />
        <UserCircle />
      </div>
    </header>
  );
}

export default Topbar;