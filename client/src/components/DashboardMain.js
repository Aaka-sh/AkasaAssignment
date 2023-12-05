import React, { useState, useEffect } from "react";
import Axios from "axios";
import TeamCards from "./TeamCards";
import { createClient } from "@supabase/supabase-js";

export default function DashboardMain() {
  const [teamDetails, setTeamDetails] = useState([]);
  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );

  const getTeams = async () => {
    const { data, error } = await supabase
      .from("Users")
      .select("id")
      .eq("email", sessionStorage.getItem("email"));
    console.log(data[0].id);

    let { data: blogposts, error1 } = await supabase
      .from("blogposts")
      .select("*")
      .eq("user_id", data[0].id);
    console.log(blogposts);
    sessionStorage.setItem("userid", data[0].id);
    setTeamDetails(blogposts);
  };

  useEffect(() => {
    getTeams();
    console.log(teamDetails);
  }, []);

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>My Posts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">View Posts</li>
            </ol>
          </nav>
        </div>

        {/* End Page Title */}
        <div className="d-flex flex-row gap-4 flex-wrap">
          {teamDetails.map((item, key) => {
            return (
              <TeamCards
                keyword={item.keyword}
                team_id={item.Team_ID}
                title={item.title}
                project_description={item.post}
                id={item.id}
                key={key}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
