import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import { loginHandler } from "./loginHandler";
import { useAuth } from "../../../Context/AuthContext";

const Login = () => {
  const { AuthDispatch } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from.pathemail || "/";

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // INPUT HANDLER
  const inputChangeHandler = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // HANDLING GUEST DATA
  const handlerGuest = () => {
    setLoginData(() => ({
      email: "katiyar@gmail.com",
      password: "ashish@123",
    }));
    AuthDispatch({ type: "GUEST_LOGIN" });
    navigate("/ProductList");
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <form action="">
        <div className="text__field">
          <input
            type="text"
            name="email"
            required
            onChange={inputChangeHandler}
          />
          <span></span>
          <label>UserEmail</label>
        </div>
        <div className="text__field">
          <input
            type="password"
            name="password"
            required
            onChange={inputChangeHandler}
          />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input
          type="submit"
          value="Login"
          onClick={(e) =>
            loginHandler(e, loginData, AuthDispatch, from, navigate)
          }
        />
        <button className="guestLogin" onClick={handlerGuest}>
          Guest Login
        </button>
      </form>
      <div className="signup__link">
        Not a member? <Link to="/SignUp">SignUp</Link>
      </div>
    </div>
  );
};

export default Login;
