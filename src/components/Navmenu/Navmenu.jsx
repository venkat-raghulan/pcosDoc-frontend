import React from "react";
import "./Navmenu.css";
import { Link, NavLink } from "react-router-dom";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navmenu(props) {
  return (
    <header className="navmenu">
      <nav className="navmenu__navigation">
        <FontAwesomeIcon
          onClick={props.drawerClickHandler}
          icon={faBars}
          className="navmenu__toggle-button"
        />

        <div className="navmenu__logo">
          <NavLink to="/">
            <span>PCOS</span> Clinic
          </NavLink>
        </div>
        <div className="spacer"></div>
        <div className="navmenu__items">
          <ul>
            <li>
              <NavLink to="/mygoals">My Goals</NavLink>
            </li>
            <li>
              <NavLink to="/">Login/Signup</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
