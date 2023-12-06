import React, { useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Swal from "sweetalert2";

export default function Login() {
  let navigate = useNavigate();
  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const { data, error } = await supabase
      .from("Users")
      .select("email, password")
      .eq("email", username)
      .eq("password", password);
    console.log(data);
    if (data.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Invalid Email/Password! Try again!",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      localStorage.setItem("email", true);
      sessionStorage.setItem("email", username);
      navigate("/homepage");
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span
                        className="d-none d-lg-block"
                        style={{ color: "#574476" }}
                      >
                        BlogVista
                      </span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5
                          className="card-title text-center pb-0 fs-4"
                          style={{ color: "#574476" }}
                        >
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your username &amp; password to login
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              placeholder="johndoe@abc.com"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn w-100 mt-3"
                            type="button"
                            style={{
                              backgroundColor: "#574476",
                              color: "white",
                            }}
                            onClick={() => {
                              login();
                            }}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have account?{" "}
                            <a href="/register" style={{ color: "#574476" }}>
                              Create an account
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
