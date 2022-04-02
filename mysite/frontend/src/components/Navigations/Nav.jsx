import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => (
  <div className={styles.container}>
    <div className={styles.nav}>
      <button className="navbar-toggler" type="button">
        <NavLink to="/users">Users</NavLink>
      </button>
      <button className="navbar-toggler" type="button">
        <NavLink to="/groups">Groups</NavLink>
      </button>
    </div>
  </div>
);

export default Nav;
