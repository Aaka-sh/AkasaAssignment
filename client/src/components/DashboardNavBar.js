import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

export default function DashboardNavBar() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/guide-auth").then((res) => {
  //     if (res.data !== "success") {
  //       navigate("/login");
  //     }
  //   });
  // }, []);

  const logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userid");
    sessionStorage.clear();
    navigate("/login");
  };

  // const [guideUserDetails, setGuideUserDetails] = useState([]);
  // const [guideDetails, setGuideDetails] = useState([]);

  // const loadData = () => {
  //   Axios.get("http://localhost:3001/guide/userdata", {}).then((response) => {
  //     setGuideUserDetails(response.data);
  //     console.log(guideUserDetails);
  //   });
  // };

  // const getGuideData = async () => {
  //   const guideDataResponse = await Axios.get(
  //     "http://localhost:3001/guide/data"
  //   );
  //   setGuideDetails(guideDataResponse.data);
  //   console.log(guideDetails);
  //   //console.log(studentDetails);
  // };

  // useEffect(() => {
  //   getGuideData();
  // }, []);

  // useEffect(() => {
  //   loadData();
  // }, []);

  // const supabase = createClient(
  //   "https://bucxmapgbqvszyijxeav.supabase.co",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1Y3htYXBnYnF2c3p5aWp4ZWF2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTk5NDExNSwiZXhwIjoxOTk1NTcwMTE1fQ.frpT81qIffE-2x1u0Mh-5q9p0ApL5HKlFnzIKIiCVJI"
  // );
  // const { data, error } = supabase.storage
  //   .from("userimages")
  //   .getPublicUrl("public/" + sessionStorage.guideName + ".png");
  // console.log(data.publicUrl);

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
        style={{ backgroundColor: "#574476" }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="/dashboard" className="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span className="d-none d-lg-block" style={{ color: "#ffffff" }}>
              BlogVista
            </span>
          </a>
        </div>
        {/* End Logo */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
                style={{ color: "#ffffff" }}
              >
                Options
              </a>
              {/* End Profile Iamge Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    onClick={logout}
                  >
                    <i className="bi bi-box-arrow-right" />
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
