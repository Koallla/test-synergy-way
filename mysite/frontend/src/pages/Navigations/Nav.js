import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <div>
    <button className="navbar-toggler" type="button">
      <NavLink to="/users">Users</NavLink>
    </button>
    <button className="navbar-toggler" type="button">
      <NavLink to="/groups">Groups</NavLink>
    </button>
  </div>
);

export default Nav;
