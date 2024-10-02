import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="home-icon">
          <Link to="/home">
            <FaHome size={24} color="white" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/display-user">Display User</Link>
            </li>
            <li>
              <Link to="/update-user">Update User</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
