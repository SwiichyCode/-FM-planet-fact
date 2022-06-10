import React from "react";
import { Link } from "react-router-dom";
import { LogoWrapper } from "./LogoStyle";

export default function Logo() {
  return (
    <LogoWrapper>
      <Link to="/">the planets</Link>
    </LogoWrapper>
  );
}
