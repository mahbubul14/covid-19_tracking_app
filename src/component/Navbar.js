import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/">Items</NavLink>
      </li>
      <li>
        <NavLink to="/details">Details</NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
