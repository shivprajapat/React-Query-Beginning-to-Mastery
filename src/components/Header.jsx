import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navItems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Traditional Super Heroes",
      path: "/super-heroes"
    },
    {
      title: "RQ Super Heroes",
      path: "/rq-super-heroes"
    },
    {
      title: "Parallel Queries",
      path: "/rq-parallel"
    },
    {
      title: "Dynamic Parallel",
      path: "/rq-dynamic-parallel"
    },
    {
      title: "Dependent Queries",
      path: "/rq-dependent"
    }
  ]
  return (
    <header>
      <nav>
        <img
          className="logo"
          src="https://react-query-v3.tanstack.com/_next/static/images/logo-7a7896631260eebffcb031765854375b.svg"
          alt=""
        />
        <ul>
          {
            navItems.map((item, i) => {
              const { path, title } = item;
              return (
                <li key={i}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              )
            })}
        </ul>

      </nav>
    </header>
  );
};

export default Header;
