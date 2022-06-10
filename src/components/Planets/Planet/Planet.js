import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useFetch } from "../../../hooks/useFetch";
import { PlanetWrapper } from "./PlanetStyle";
import PlanetMiddleSide from "../PlanetMiddleSide/PlanetMiddleSide";
import PlanetBotSide from "../PlanetBotSide/PlanetBotSide";

export default function Planet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000/planets/" + id;
  const { data: planets } = useFetch(url);

  return (
    <PlanetWrapper>
      {id
        ? planets && (
            <div className="planet-content">
              <PlanetMiddleSide planets={planets} />
              <PlanetBotSide planets={planets} />
            </div>
          )
        : navigate("/mercury/overwiew")}
    </PlanetWrapper>
  );
}
