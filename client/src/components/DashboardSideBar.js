import React from "react";
// import axios from "axios";

export default function DashboardSideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/guidedashboard">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </a>
        </li>
        {/* End Dashboard Nav */}

        {/* End Profile Page Nav */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/createpost">
            <i className="bi bi-person-add" />
            <span>Create Post</span>
          </a>
        </li>
        {/* End Add Team Nav */}
      </ul>
    </aside>
  );
}
