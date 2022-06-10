import React from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { HeaderWrapper } from "./HeaderStyle";

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="header-items">
        <Logo />
        <Nav />
      </div>
      <div className="header-line"></div>
    </HeaderWrapper>
  );
}
