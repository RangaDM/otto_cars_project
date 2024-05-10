import React, { useEffect, useState, useCallback } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from "axios";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [Error, setError] = useState("");
  const [form, setForm] = useState({
    login: { email: "", password: "" },
    register: {
      profile: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });


  const handleFormChange = useCallback((e, formType) => {
    setForm({
      ...form,
      [formType]: { ...form[formType], [e.target.name]: e.target.value },
    });
  }, [form]);

  const handleLogin = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        form.login
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userID", response.data.user._id);
        localStorage.setItem("firstName", response.data.user.firstName);
        localStorage.setItem("lastName", response.data.user.lastName);
        localStorage.setItem("email", response.data.user.email);
        window.location.href = "/user-profile";
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  }, [form.login]);

  const handleSignUp = useCallback(async () => {
    if (Object.values(form.register).some((value) => value === "")) {
      setError("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/customerregister",
        form.register
      );
      console.log(response.data);
      // localStorage.setItem("token", response.data.token);
      // localStorage.setItem("userID", response.data.user._id);
      // localStorage.setItem("firstName", response.data.user.firstName);
      // localStorage.setItem("lastName", response.data.user.lastName);
      // localStorage.setItem("email", response.data.user.email);
      window.location.href = "/user-profile";
    } catch (error) {
      setError("Somthing went wrong, please try again later");
    }
  }, [form.register]);

  useEffect(() => {
    if (Error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [Error]);

  return (
    <Helmet title="Login">
      <CommonSection title="Profile" />
      <div className="flex justify-center items-center pb-10">
        <div className={styles.container}>
          <div>
            <div className="flex items-center justify-center">
              <div
                className={`${styles.tab} ${
                  activeTab === "login" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </div>
              <div
                className={`${styles.tab} ${
                  activeTab === "register" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("register")}
              >
                Register
              </div>
            </div>
            <div className={`${styles.errorText} ${Error ? styles.error : ""}`}>
              {Error}
            </div>
            {activeTab === "login" ? (
              <form className={styles.form}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.login.email}
                  onChange={(e) => handleFormChange(e, "login")}
                  placeholder="Email"
                  required
                />
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  value={form.login.password}
                  onChange={(e) => handleFormChange(e, "login")}
                  placeholder="Password"
                  required
                />
                <a href="#" className="text-xs text-blue-600 py-2">
                  Forgot Password?
                </a>
                <div className="flex items-center justify-center py-2">
                  <button
                    className={styles.button}
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            ) : (
              <form className={styles.form}>
                <input
                  className={styles.input}
                  type="file"
                  name="profile"
                  onChange={(e) => handleFormChange(e, "register")}
                  required
                />
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  value={form.register.firstName}
                  onChange={(e) => handleFormChange(e, "register")}
                  placeholder="First Name"
                  required
                />
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  value={form.register.lastName}
                  onChange={(e) => handleFormChange(e, "register")}
                  placeholder="Last Name"
                  required
                />
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={form.register.email}
                  onChange={(e) => handleFormChange(e, "register")}
                  placeholder="Email"
                  required
                />
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  value={form.register.password}
                  onChange={(e) => handleFormChange(e, "register")}
                  placeholder="Password"
                  required
                />
                <div className="flex items-center justify-center py-2">
                  <button
                    className={styles.button}
                    type="button"
                    onClick={handleSignUp}
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Login;
