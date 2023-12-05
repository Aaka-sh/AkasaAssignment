import React, { useState } from "react";
import Axios from "axios";
import Navbar from "./Navbar";
import { createClient } from "@supabase/supabase-js";

import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();
  const [userRoleReg, setUserRoleReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [status, setStatus] = useState("");

  const supabase = createClient(
    "https://qydqfffifmazzfuibxst.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5ZHFmZmZpZm1henpmdWlieHN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MDc3MTAsImV4cCI6MjAxNzI4MzcxMH0.vnfTpK1szQnvobJbBmi_7Y80yvnDTogKVsm5JW3jZCM"
  );

  const register = async () => {
    console.log(usernameReg, passwordReg);
    const { data, error } = await supabase
      .from("Users")
      .insert([{ email: usernameReg, password: passwordReg }]);
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
                      <span className="d-none d-lg-block">BlogsSpot</span>
                    </a>
                  </div>
                  {/* End Logo */}
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Create an Account
                        </h5>
                        <p className="text-center small">
                          Enter your personal details to create account
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <br />
                        <div className="col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="johndoe@abc.com"
                            onChange={(e) => {
                              setUsernameReg(e.target.value);
                            }}
                          />
                          <label className="form-label" form="Username">
                            Email
                          </label>
                          <div className="invalid-feedback">
                            Please, enter your Email!
                          </div>
                        </div>

                        <div className="col-12">
                          <input
                            type="password"
                            id="form2Example2"
                            className="form-control"
                            onChange={(e) => {
                              setPasswordReg(e.target.value);
                            }}
                          />{" "}
                          <label className="form-label" form="Password">
                            Password
                          </label>
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            style={{
                              backgroundColor: "#012970",
                              color: "white",
                            }}
                            onClick={() => {
                              register();
                              navigate("/login");
                            }}
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Already have an account? <a href="/Login">Log in</a>
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
