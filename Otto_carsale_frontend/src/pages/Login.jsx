import React, { useEffect, useState } from "react";
import "../styles/login.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timer;
    if (loginError) {
      setShowError(true);
      timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [loginError]);

  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterFormChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    try {
      const data = { email: loginForm.email, password: loginForm.password };
      const response = await axios.post("http://localhost:5000/api/v1/customer/login", data);
      // console.log("Login Response:", response);
      // console.log("id:", response.data.customer._id);
      // console.log("Login status:", response.status);
      if (response.status === 200) {
        // console.log("Login Success");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.customer._id);
        window.location.href = "/user-profile";
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoginError("Invalid email or password");
    }
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
              {showError && <p className="error" style={{ color:"red" , padding:"0"}}>{loginError}</p>}
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
              <button type="button" onClick={handleSignIn}>Log in</button>
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
              <button type="button" onClick={handleSignUp}>Register</button>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
