import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import styles from "../styles/Login.module.css";
import "../styles/login.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [error, setError] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isUploading, setIsUploading] = useState(false);
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
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [formType]: { ...prevForm[formType], [name]: value },
    }));
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/auth/signin",
        form.login
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        const { userId, firstName, lastName, email, role } = user;
        localStorage.setItem("token", token);
        localStorage.setItem("userID", userId);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role + token);
        window.location.href = "/user-profile";
      }
    } catch {
      setError("Invalid email or password");
    }
  }, [form.login]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.error("No file selected.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    setIsUploading(true);

    try {
      const response = await fetch("http://localhost:4000/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Upload successful", result.filepath);
      setFilePath(result.filepath);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSignUp = useCallback(async () => {
    const { firstName, lastName, email, password } = form.register;
    if ([firstName, lastName, email, password].some((value) => value === "")) {
      setError("Please fill all the fields");
      return;
    }

    if (!filePath) {
      setError("Please select an image file");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/auth/signup", {
        ...form.register,
        profilePic: filePath,
      });
      console.log(response.data);
      if (response.data.statusCode === 200) {
        window.location.reload();
      } else {
        setError("Please try again");
      }
    } catch {
      setError("Something went wrong, please try again later");
    }
  }, [form.register, filePath]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

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
            {error && (
              <div className={`${styles.errorText} ${styles.error}`}>
                {error}
              </div>
            )}
            {activeTab === "login" ? (
              <LoginForm
                form={form.login}
                onChange={(e) => handleFormChange(e, "login")}
                onSubmit={handleLogin}
              />
            ) : (
              <RegisterForm
                form={form.register}
                onChange={(e) => handleFormChange(e, "register")}
                onFileChange={handleFileChange}
                onSubmit={handleSignUp}
                isUploading={isUploading}
              />
            )}
          </div>
        </div>
      </div>
    </Helmet>
  );
};

const LoginForm = ({ form, onChange, onSubmit }) => (
  <form className={styles.form}>
    <input
      className={styles.input}
      type="email"
      name="email"
      value={form.email}
      onChange={onChange}
      placeholder="Email"
      required
      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      title="Please enter a valid email address."
    />
    <input
      className={styles.input}
      type="password"
      name="password"
      value={form.password}
      onChange={onChange}
      placeholder="Password"
      required
    />
    <a href="#" className="text-xs text-blue-600 py-2">
      Forgot Password?
    </a>
    <div className="flex items-center justify-center py-2">
      <button className={styles.button} type="button" onClick={onSubmit}>
        Login
      </button>
    </div>
  </form>
);

const RegisterForm = ({
  form,
  onChange,
  onFileChange,
  onSubmit,
  isUploading,
}) => (
  <form className={styles.form}>
    <input
      className={styles.input}
      type="file"
      name="image"
      onChange={onFileChange}
      required
    />
    <input
      className={styles.input}
      type="text"
      name="firstName"
      value={form.firstName}
      onChange={onChange}
      placeholder="First Name"
      required
      disabled={isUploading}
    />
    <input
      className={styles.input}
      type="text"
      name="lastName"
      value={form.lastName}
      onChange={onChange}
      placeholder="Last Name"
      required
      disabled={isUploading}
    />
    <input
      className={styles.input}
      type="email"
      name="email"
      value={form.email}
      onChange={onChange}
      placeholder="Email"
      required
      disabled={isUploading}
      pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
      title="Please enter a valid email address."
    />
    <input
      className={styles.input}
      type="password"
      name="password"
      value={form.password}
      onChange={onChange}
      placeholder="Password"
      required
      disabled={isUploading}
    />
    <div className="flex items-center justify-center py-2">
      <button
        className={styles.button}
        type="button"
        onClick={onSubmit}
        disabled={isUploading}
      >
        Register
      </button>
    </div>
  </form>
);

export default Login;
