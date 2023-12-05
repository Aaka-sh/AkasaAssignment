import React from "react";
import { createClient } from "@supabase/supabase-js";
export default function TeamCards(props) {
  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );
  return (
    <div className="card col-lg-5">
      <div className="card-body">
        <div className="title-div" style={{ alignItems: "center" }}>
          <h5 className="card-title">{props.title}</h5>
        </div>
        <p className="card-text">
          <b> Keyword: </b> {props.keyword}
        </p>
        <div
          style={{
            margin: "4px, 4px",
            padding: "4px",
            width: "100%",
            height: "250px",
            overflowX: "hidden",
            overflowY: "auto",
            textAlign: "justify",
          }}
        >
          {props.project_description}
        </div>
        <div className="text-center">
          <a
            href="/editpost"
            className="btn w-100 mt-3"
            style={{ backgroundColor: "#012970", color: "white" }}
            onClick={() => {
              sessionStorage.setItem("blogid", props.id);
            }}
          >
            Edit Post
          </a>
        </div>
        <button
          className="btn w-100 mt-3"
          type="button"
          style={{
            backgroundColor: "#012970",
            color: "white",
          }}
          onClick={async () => {
            const { error } = await supabase
              .from("blogposts")
              .delete()
              .eq("id", props.id);
            window.location.reload(true);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
