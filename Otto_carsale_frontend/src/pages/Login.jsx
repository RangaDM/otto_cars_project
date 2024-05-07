import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    login: { email: "", password: "" },
    register: { name: "", email: "", password: "" },
  });
  const [loginError, setLoginError] = useState("");

  const handleFormChange = (e, formType) => {
    setForm({
      ...form,
      [formType]: { ...form[formType], [e.target.name]: e.target.value },
    });
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        form.login
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.user._id);
        window.location.href = "/user-profile";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoginError("Invalid email or password");
    }
  };

  const handleSignUp = () => {
    if (Object.values(form.register).some((value) => value === "")) {
      setLoginError("Please fill all the fields");
      return;
    }
    console.log("Register Form:", form.register);
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Profile" />
      <div className="flex items-center justify-center my-10">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="login">
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">
                Log in
              </label>
              {loginError && (
                <p className="error" style={{ color: "red", padding: "0" }}>
                  {loginError}
                </p>
              )}
              <input
                className="input"
                type="Email"
                name="email"
                value={form.login.email}
                onChange={(e) => handleFormChange(e, "login")}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="password"
                value={form.login.password}
                onChange={(e) => handleFormChange(e, "login")}
                placeholder="Password"
                required
              />
              <button type="button" onClick={handleSignIn}>
                Log in
              </button>
              <p style={{ color: "white", margin: "0" }}>
                <a href="#">Do you forgot password?</a>
              </p>
            </form>
          </div>

          <div className="register">
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">
                Register
              </label>
              <input
                className="input"
                type="text"
                name="name"
                value={form.register.name}
                onChange={(e) => handleFormChange(e, "register")}
                placeholder="Username"
                required
              />
              <input
                className="input"
                type="Email"
                name="email"
                value={form.register.email}
                onChange={(e) => handleFormChange(e, "register")}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="password"
                value={form.register.password}
                onChange={(e) => handleFormChange(e, "register")}
                placeholder="Password"
                required
              />
              <button type="button" onClick={handleSignUp}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
