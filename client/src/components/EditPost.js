import React, { useState, useEffect } from "react";
import GuideNavBar from "./DashboardNavBar";
import GuideSideBar from "./DashboardSideBar";
import Axios from "axios";
import { createClient } from "@supabase/supabase-js";
import Swal from "sweetalert2";

export default function EditPost(props) {
  const [userID, setUserID] = useState("");
  const [teamNumber, setTeamNumber] = useState("");
  const [projectName, setProjectName] = useState("");

  const [blogpost, setBlogPost] = useState("");
  const [keyword, setKeyword] = useState("");

  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );

  const ViewPost = async () => {
    console.log("Hello");
    let { data: blogposts, error1 } = await supabase
      .from("blogposts")
      .select("*")
      .eq("id", sessionStorage.getItem("blogid"));
    console.log(blogposts);
    setProjectName(blogposts[0].title);
    setKeyword(blogposts[0].keyword);
    setBlogPost(blogposts[0].post);
  };

  const updatePost = async (event) => {
    const { data, error } = await supabase.from("blogposts").upsert({
      id: sessionStorage.getItem("blogid"),
      keyword: keyword,
      title: projectName,
      post: blogpost,
    });

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Published Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return (
    <div className="ml-5" onLoad={ViewPost}>
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1 style={{ color: "#574476" }}>Edit Post</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Edit Blog Post</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-11">
              <div className="card">
                <div className="card-body pt-3">
                  {/* Profile Edit Form */}
                  <form className="pl-5 pr-5 pt-3 pb-3">
                    <div className="row mb-3">
                      <label
                        htmlFor="projectName"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Blog Title
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="projectName"
                          type="text"
                          className="form-control"
                          id="projectName"
                          defaultValue={projectName}
                          onChange={(e) => {
                            setProjectName(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="blogpost"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Blog Post
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="blogpost"
                          className="form-control"
                          id="blogpost"
                          style={{ height: "100px" }}
                          defaultValue={blogpost}
                          onChange={(e) => {
                            setBlogPost(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="keyword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Keyword
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="keyword"
                          type="text"
                          className="form-control"
                          id="keyword"
                          defaultValue={keyword}
                          onChange={(e) => {
                            setKeyword(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn col-md-8 mt-4"
                        style={{
                          backgroundColor: "#574476",
                          color: "white",
                        }}
                        onClick={(e) => {
                          updatePost(e);
                        }}
                      >
                        Publish
                      </button>
                    </div>
                  </form>
                  {/* End Profile Edit Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
