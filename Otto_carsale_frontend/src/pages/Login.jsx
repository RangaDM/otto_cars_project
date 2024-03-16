import React, { useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [regemail, setRegEmail] = useState("");
  const [regpassword, setRegPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleRegEmailChange = (e) => {
    setRegEmail(e.target.value);
    console.log(regemail);
  };

  const handleRegPasswordChange = (e) => {
    setRegPassword(e.target.value);
    console.log(regpassword);
  };

  const handleSignUp = () => {
    console.log("Name:", name);
    console.log("Email:", regemail);
    console.log("Password:");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
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
              <input
                className="input"
                type="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                required
              />
              <button
                onClick={() => {
                  handleSignIn();
                }}
              >
                Log in
              </button>
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
                value={name}
                onChange={handleNameChange}
                placeholder="Username"
                required
              />
              <input
                className="input"
                type="Email"
                name="email"
                value={regemail}
                onChange={handleRegEmailChange}
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="password"
                value={regpassword}
                onChange={handleRegPasswordChange}
                placeholder="Password"
                required
              />
              <button
                onClick={() => {
                  handleSignUp();
                }}
              >
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
