import React from "react";
export default function Navbar() {
  return (
    <header
      id="header"
      className="header fixed-top d-flex align-items-center mx-auto"
      style={{ backgroundColor: "#574476" }}
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ marginRight: "auto" }}
      >
        <a href="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block" style={{ color: "#ffffff" }}>
            BlogVista
          </span>
        </a>
      </div>
      {/* End Logo */}
      <div id="navbar" className="navbar" style={{ marginRight: "20px" }}>
        {sessionStorage.getItem("email") === null && (
          <ul>
            <li>
              <a
                className="nav-link scrollto"
                href="/login"
                style={{ color: "#ffffff" }}
              >
                Login
              </a>
            </li>
            <li>
              <a
                className="getstarted scrollto"
                href="/register"
                style={{ color: "#ffffff" }}
              >
                Register
              </a>
            </li>
          </ul>
        )}

        {sessionStorage.getItem("email") !== null && (
          <ul>
            <li>
              <a className="nav-link scrollto" href="/dashboard">
                Dashboard
              </a>
            </li>
          </ul>
        )}

        <i className="bi bi-list mobile-nav-toggle" />
      </div>
    </header>
  );
}
