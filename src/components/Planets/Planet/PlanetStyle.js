import styled from "styled-components";
import background from "../../../assets/background-stars.svg";

export const PlanetWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--primary-black);
  background-image: url(${background});
  background-size: cover;
  overflow: hidden;

  .planet-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
