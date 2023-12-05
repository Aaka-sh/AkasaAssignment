import React from "react";
// import axios from "axios";

export default function DashboardSideBar() {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/homepage">
              <i style={{ color: "#574476" }} className="bi bi-person-add" />
              <span style={{ color: "#574476" }}>Homepage</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/dashboard">
              <i style={{ color: "#574476" }} className="bi bi-grid" />
              <span style={{ color: "#574476" }}>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/createpost">
              <i style={{ color: "#574476" }} className="bi bi-person-add" />
              <span style={{ color: "#574476" }}>Create Post</span>
            </a>
          </li>
          {/* End Add Team Nav */}
        </ul>
      </aside>
    </div>
  );
}
