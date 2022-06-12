import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const PlanetBotSideWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 56px;
  box-sizing: border-box;
  padding: 0 1em;

  @media (max-width: 768px) {
    padding: 0 39px;
    margin-bottom: 0px;
  }

  li {
    width: 100%;
    height: 126px;
    max-width: 255px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    mix-blend-mode: normal;
    border: 1px solid rgba(255, 255, 255, 0.25);
    gap: 4px;

    @media (max-width: 768px) {
      max-width: 164px;
      height: 86px;
      gap: 0;
    }
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.5;
    font-family: "League Spartan", sans-serif;
    padding-left: 23px;

    @media (max-width: 768px) {
      font-size: 8px;
      letter-spacing: 0.72px;
      line-height: 16px;
      padding-left: 15px;
    }
  }

  span:nth-child(2) {
    font-weight: 400;
    line-height: 52px;
    font-size: 40px;
    letter-spacing: -1.5px;
    mix-blend-mode: initial;
    opacity: 1;
    font-family: "Antonio", sans-serif;

    @media (max-width: 768px) {
      font-size: 24px;
      letter-spacing: -0.9px;
    }
  }
`;
