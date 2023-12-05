import React, { useState, useReducer } from "react";
import { createClient } from "@supabase/supabase-js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

export default function PostsCard(props) {
  const initialState = {
    likes: 0,
    dislikes: 0,
  };

  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );

  const appReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_LIKE":
        return {
          ...state,
          likes: state.likes + action.payload,
        };
      case "HANDLE_DISLIKE":
        return {
          ...state,
          dislikes: state.dislikes + action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { likes, dislikes } = state;
  const [status, setStatus] = useState(null);

  const handleClickLike = async () => {
    if (status === "like") {
      setStatus(null);
      dispatch({
        type: "HANDLE_LIKE",
        payload: -1,
      });
    } else {
      setStatus("like");
      if (status === "dislike") {
        dispatch({
          type: "HANDLE_DISLIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_LIKE",
        payload: 1,
      });
    }
  };

  const handleClickDislike = () => {
    if (status === "dislike") {
      setStatus(null);
      dispatch({
        type: "HANDLE_DISLIKE",
        payload: -1,
      });
    } else {
      setStatus("dislike");
      if (status === "like") {
        dispatch({
          type: "HANDLE_LIKE",
          payload: -1,
        });
      }
      dispatch({
        type: "HANDLE_DISLIKE",
        payload: 1,
      });
    }
  };

  return (
    <div
      className="card col-lg-5"
      style={{
        height: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className="card-body">
        <div className="title-div" style={{ alignItems: "center" }}>
          <h5 className="card-title">{props.title}</h5>
        </div>
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
          <p className="card-text">
            <b> Keyword: </b> {props.keyword}
            <br />
            <br />
            {props.project_description}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <button
            className={status === "like" ? "btn active" : "btn"}
            onClick={handleClickLike}
          >
            Like
          </button>

          <button
            className={status === "dislike" ? "btn active" : "btn"}
            onClick={handleClickDislike}
          >
            Dislike
          </button> */}
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
    </div>
  );
}
