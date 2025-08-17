import './LogIn.css';
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

    const handleLoginClick = () => {
    navigate("/#home"); // go to login page
  };

 return (
    <div className="login-container">
      <header className="login-header">
        <FaBars className="menu-icon" />
        <h1 className="login-title">Log in</h1>
        <FaUserCircle className="profile-icon" />
      </header>

      <form className="login-form" onSubmit={handleLoginClick}>
        <label>Username</label>
        <input type="text" placeholder="" required />

          <label>Password</label>
        <input type="password" placeholder="" required />

          <button type="submit" className="login-button">Log In</button>
      </form>

       </div>
  );
}

export default LogIn;
