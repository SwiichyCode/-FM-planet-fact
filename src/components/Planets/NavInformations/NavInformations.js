import React from "react";
import { NavLink } from "react-router-dom";
import { NavInformationsWrapper } from "./NavInformationStyle";

export default function NavInformations({ planets }) {
  const navItems = [
    {
      text: "overview",
      routes: `${planets.name}/overwiew`,
      className: `${planets.name}-link`,
    },
    {
      text: "internal structure",
      routes: `${planets.name}/structure`,
      className: `${planets.name}-link`,
    },
    {
      text: "surface geology",
      routes: `${planets.name}/surface`,
      className: `${planets.name}-link`,
    },
  ];

  return (
    <NavInformationsWrapper>
      {navItems.map(({ text, routes, className }, index) => (
        <li key={index}>
          <NavLink
            to={routes}
            className={({ isActive }) => (isActive ? className : undefined)}
          >
            <span>0{index + 1}</span>
            {text}
          </NavLink>
        </li>
      ))}
    </NavInformationsWrapper>
  );
}
