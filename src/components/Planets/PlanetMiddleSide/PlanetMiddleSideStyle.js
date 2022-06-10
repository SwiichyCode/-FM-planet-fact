import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const PlanetMiddleSideWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 87px;

  .content-img-geology {
    position: relative;
  }

  .planet-img {
    width: auto;
    height: auto;
    max-width: 500px;
    max-height: 500px;
  }

  .planet-img-geology {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-width: 163px;
    max-height: 199px;
  }

  .middle-side-information {
    color: #ffffff;
    padding-left: ${px2vw(300)};

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: ${px2vw(80)};
      line-height: ${px2vw(104)};
      text-transform: uppercase;
      padding-bottom: ${px2vw(23)};
    }

    p {
      max-width: ${px2vw(350)};
      font-style: normal;
      font-weight: 400;
      font-size: ${px2vw(14)};
      line-height: ${px2vw(25)};
      padding-bottom: ${px2vw(24)};
      font-family: "League Spartan", sans-serif;
    }

    .planet-wiki {
      font-style: normal;
      font-weight: 400;
      font-size: ${px2vw(14)};
      line-height: 25px;
      color: #ffffff;
      mix-blend-mode: normal;
      opacity: 0.5;
      font-family: "League Spartan", sans-serif;

      a {
        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.5;
      }
    }
  }
`;
