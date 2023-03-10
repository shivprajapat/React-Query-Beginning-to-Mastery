import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <img
          className="logo"
          src="https://react-query-v3.tanstack.com/_next/static/images/logo-7a7896631260eebffcb031765854375b.svg"
          alt=""
        />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/super-heroes">Traditional Super Heroes</NavLink>
          </li>
          <li>
            <NavLink to="/rq-super-heroes">RQ Super Heroes</NavLink>
          </li>
          <li>
            <NavLink to="/rq-parallel">Parallel Queries</NavLink>
          </li>

        </ul>

      </nav>
    </header>
  );
};

export default Header;
