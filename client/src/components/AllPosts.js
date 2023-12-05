import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { createClient } from "@supabase/supabase-js";
export default function AllPosts(props) {
  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );
  return (
    <div className="card col-lg-5">
      <div className="card-body">
        <div className="title-div" style={{ alignItems: "center" }}>
          <h5 className="card-title" style={{ color: "#574476" }}>
            {props.title}
          </h5>
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
        <FormControlLabel
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              name="checkedH"
            />
          }
        />
      </div>
    </div>
  );
}
