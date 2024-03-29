import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });

  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterFormChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSignIn = () => {
    console.log("Login Form:", loginForm);
  };

  const handleSignUp = () => {
    console.log("Register Form:", registerForm);
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Profile" />
      <div className="flex items-center justify-center my-10">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="login">
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">Log in</label>
              <input
                className="input"
                type="Email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginFormChange}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginFormChange}
                placeholder="Password"
                required
              />
              <button onClick={handleSignIn}>Log in</button>
            </form>
          </div>

          <div className="register">
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">Register</label>
              <input
                className="input"
                type="text"
                name="name"
                value={registerForm.name}
                onChange={handleRegisterFormChange}
                placeholder="Username"
                required
              />
              <input
                className="input"
                type="Email"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterFormChange}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterFormChange}
                placeholder="Password"
                required
              />
              <button onClick={handleSignUp}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;