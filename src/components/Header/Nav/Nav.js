import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <NavWrapper>
      <ul>
        {navItems.map(({ text, routes }, index) => (
          <li key={index}>
            <Link to={`/${routes}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </NavWrapper>
  );
}
