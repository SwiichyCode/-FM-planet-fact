import React from "react";
import { useParams } from "react-router-dom";

import { PlanetMiddleSideWrapper } from "./PlanetMiddleSideStyle";
import NavInformations from "../../Planets/NavInformations/NavInformations";
import iconSource from "../../../assets/icon-source.svg";

export default function PlanetMiddleSide({ planets }) {
  const { params } = useParams();

  const renderText = (planets) => {
    if (params === "overwiew") {
      return <p>{planets.overview.content}</p>;
    }
    if (params === "structure") {
      return <p>{planets.structure.content}</p>;
    }
    if (params === "surface") {
      return <p>{planets.geology.content}</p>;
    }
  };

  const renderImg = (planets) => {
    if (params === "overwiew") {
      return <img className="planet-img" src={planets.images.planet} alt="" />;
    }
    if (params === "structure") {
      return (
        <img className="planet-img" src={planets.images.internal} alt="" />
      );
    }
    if (params === "surface") {
      return (
        <div className="content-img-geology">
          <img src={planets.images.planet} className="planet-img" alt="" />
          <img
            className="planet-img-geology"
            src={planets.images.geology}
            alt=""
          />
        </div>
      );
    }
  };

  const renderSource = (planets) => {
    if (params === "overwiew") {
      return (
        <a href={planets.overview.source} alt="">
          Wikipedia <img src={iconSource} alt="" />
        </a>
      );
    }
    if (params === "structure") {
      return (
        <a href={planets.structure.source} alt="">
          Wikipedia <img src={iconSource} alt="" />
        </a>
      );
    }
    if (params === "surface") {
      return (
        <a href={planets.geology.source} alt="">
          Wikipedia <img src={iconSource} alt="" />
        </a>
      );
    }
  };

  return (
    <PlanetMiddleSideWrapper>
      {renderImg(planets)}
      <div className="middle-side-information">
        <h2>{planets.name}</h2>
        {renderText(planets)}
        <span className="planet-wiki">Source: {renderSource(planets)}</span>
        <NavInformations planets={planets} />
      </div>
    </PlanetMiddleSideWrapper>
  );
}
