import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar />

        <main className="content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;