import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/display-user">Display User</Link>
            </li>
            <li>
              <Link to="/update-user">Update User</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
