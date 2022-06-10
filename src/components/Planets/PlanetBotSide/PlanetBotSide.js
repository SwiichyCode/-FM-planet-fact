import React from "react";
import { PlanetBotSideWrapper } from "./PlanetBotSideStyle";

export default function PlanetBotSide({ planets }) {
  return (
    <PlanetBotSideWrapper>
      <li>
        <span>rotation time</span>
        <span>{planets.rotation}</span>
      </li>
      <li>
        <span>revolution time</span>
        <span>{planets.revolution}</span>
      </li>
      <li>
        <span>radius</span>
        <span>{planets.radius}</span>
      </li>
      <li>
        <span>average temp.</span>
        <span>{planets.rotation}</span>
      </li>
    </PlanetBotSideWrapper>
  );
}
