import React from "react";
import "./Navmenu.css";

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
          <a href="/">
            <span>PCOS</span> Clinic
          </a>
        </div>
        <div className="spacer"></div>
        <div className="navmenu__items">
          <ul>
            <li>
              <a href="/">Item 1</a>
            </li>
            <li>
              <a href="/">Item 2</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
