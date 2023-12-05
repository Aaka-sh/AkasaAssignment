import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import PostsCard from "./PostsCard";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
export default function HomeMain() {
  const [postDets, setPostDets] = useState([]);
  const [keyword, setKeyword] = useState("");
  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );
  const getPosts = async () => {
    let { data: blogposts, error } = await supabase
      .from("blogposts")
      .select("*")
      .order("title", { ascending: true });
    console.log(blogposts);
    setPostDets(blogposts);
  };

  const clearInput = () => {
    if (
      document.getElementById("input-with-icon-adornment").value ===
      "Search for a Skill..."
    )
      document.getElementById("input-with-icon-adornment").value = "";
  };
  const defaultInput = () => {
    var s = document.getElementById("input-with-icon-adornment").value;
    if (s === "")
      document.getElementById("input-with-icon-adornment").value =
        "Search by Keyword...";
    else console.log(keyword);
  };

  const fetchdata = async () => {
    let { data: blogposts, error } = await supabase
      .from("blogposts")
      .select("*")
      .eq("keyword", keyword);

    setPostDets(blogposts);
    console.log(postDets);
  };

  useEffect(() => {
    getPosts();
    console.log(postDets);
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <h1>Unleash Ideas, One Post at a Time</h1>
            <h2>
              Explore, Engage, Evolve: Your Window to Endless Perspectives!
            </h2>
          </div>
        </div>
      </section>
      <section
        id="postsection"
        className="d-flex align-items-center"
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ margin: "20px" }}>
          <div>
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <h2>View All Posts</h2>
              <div
                style={{
                  float: "left",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",

                  margin: "30px",
                }}
              >
                <Input
                  id="input-with-icon-adornment"
                  className="searchBar"
                  style={{ width: "400px", marginRight: "20px" }}
                  placeholder="Search by Keyword..."
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  onFocus={clearInput}
                  onBlur={defaultInput}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon id="sicon" />
                    </InputAdornment>
                  }
                />

                <button
                  type="submit"
                  className="btn col-md-2 mt-4"
                  style={{
                    backgroundColor: "#574476",
                    color: "white",
                  }}
                  onClick={() => fetchdata()}
                >
                  Search
                </button>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "right",
              }}
            ></div>
          </div>
          <br />
          <div className="d-flex flex-row gap-4 flex-wrap">
            {postDets.map((item, key) => {
              return (
                <PostsCard
                  keyword={item.keyword}
                  title={item.title}
                  project_description={item.post}
                  id={item.id}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
