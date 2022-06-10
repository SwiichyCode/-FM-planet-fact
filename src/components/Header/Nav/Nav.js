import React from "react";
import { NavLink } from "react-router-dom";
import { NavWrapper } from "./NavStyle";

export default function Nav() {
  const navItems = [
    { text: "mercury", routes: "mercury/overwiew" },
    { text: "venus", routes: "venus/overwiew" },
    { text: "earth", routes: "earth/overwiew" },
    { text: "mars", routes: "mars/overwiew" },
    { text: "jupiter", routes: "jupiter/overwiew" },
    { text: "saturn", routes: "saturn/overwiew" },
    { text: "uranus", routes: "uranus/overwiew" },
    { text: "neptune", routes: "neptune/overwiew" },
  ];

  const activeClassName = "activeClassName";

  return (
    <NavWrapper>
      <ul>
        {navItems.map(({ text, routes }, index) => (
          <li key={index}>
            <NavLink
              to={`/${routes}`}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
}
