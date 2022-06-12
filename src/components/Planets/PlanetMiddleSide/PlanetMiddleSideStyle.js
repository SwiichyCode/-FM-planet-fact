import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const PlanetMiddleSideWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 87px;
  padding: 0 1em;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 27px;
    padding: 0 39px;
  }

  .content-img-geology {
    position: relative;
  }

  @media (max-width: 768px) {
    .middle-side-information-img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 460px;
    }
  }

  .planet-img {
    width: auto;
    height: auto;
    max-width: ${px2vw(500)};
    max-height: ${px2vw(500)};

    @media (max-width: 768px) {
      max-width: ${px2vw(422)};
      max-height: ${px2vw(422)};
    }
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

    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0;
      box-sizing: border-box;

      &-left {
      }
    }

    h2 {
      font-style: normal;
      font-weight: 400;
      font-size: 80px;
      line-height: 104px;
      text-transform: uppercase;
      padding-bottom: 24px;

      @media (max-width: 768px) {
        font-size: 48px;
        line-height: 62px;
      }
    }

    p {
      max-width: 350px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 25px;
      padding-bottom: 24px;
      font-family: "League Spartan", sans-serif;

      @media (max-width: 768px) {
        max-width: 339px;
        line-height: 22px;
        padding-bottom: 32px;
      }
    }

    .planet-wiki {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
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
