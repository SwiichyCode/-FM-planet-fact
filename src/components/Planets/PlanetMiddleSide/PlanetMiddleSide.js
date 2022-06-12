import React from "react";
import { useParams } from "react-router-dom";

import { PlanetMiddleSideWrapper } from "./PlanetMiddleSideStyle";
import NavInformations from "../../Planets/NavInformations/NavInformations";
import iconSource from "../../../assets/icon-source.svg";
import { renderText, renderSource, renderImg } from "../../../utils/renderItem";

export default function PlanetMiddleSide({ planets }) {
  const { params } = useParams();

  return (
    <PlanetMiddleSideWrapper>
      <div className="middle-side-information-img">
        {renderImg(planets, params)}
      </div>
      <div className="middle-side-information">
        <div className="middle-side-information-left">
          <h2>{planets.name}</h2>
          {renderText(planets, params)}
          <span className="planet-wiki">
            Source: {renderSource(planets, params, iconSource)}
          </span>
        </div>
        <div className="middle-side-information-rigth">
          <NavInformations planets={planets} />
        </div>
      </div>
    </PlanetMiddleSideWrapper>
  );
}
