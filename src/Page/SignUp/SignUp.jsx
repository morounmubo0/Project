import React from 'react'
import "./SignUp.css";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/#home"); // go to dashboard after sign in
  };

  

  return (
    <div className="signin-container">
      <header className="signin-header">
        <FaBars className="menu-icon" />
        <h1 className="signin-title">Sign in</h1>
        <FaUserCircle className="profile-icon" />
      </header>

      <form className="signin-form" onSubmit={handleSignUp}>
        <label>Username</label>
        <input type="text" placeholder="" required />

        <label>Email</label>
        <input type="email" placeholder="" required />

        <label>Password</label>
        <input type="password" placeholder="" required />

        <label>Confirm Password</label>
        <input type="password" placeholder="" required />

        <button type="submit" className="signin-button"  >Sign In</button>
      </form>

      <p className="signin-footer">
        Already have an account?{" "}
        <span className="login-link" onClick={() => navigate("/login")}>
          Log In
        </span>
      </p>
    </div>
  );
}
