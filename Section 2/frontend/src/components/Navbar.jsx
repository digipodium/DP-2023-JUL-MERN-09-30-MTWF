import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useUserContext from "../UserContext";


const Navbar = ({}) => {
  
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const { loggedIn, logout } = useUserContext();

  const showLoginOptions = () => {
    if (currentUser !== null || loggedIn ) {
      return (
        <>
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout} >Logout</button>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/profile">
              Profile
            </NavLink>    
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Event Handling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/state">
                State Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                Todo List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list">
                Product List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manageuser">
                Manage User
              </NavLink>
            </li>
            {showLoginOptions()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
