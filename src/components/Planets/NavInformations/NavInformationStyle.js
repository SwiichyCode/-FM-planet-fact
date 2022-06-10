import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const NavInformationsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${px2vw(350)};
  gap: ${px2vw(16)};
  margin-top: ${px2vw(39)};
  font-family: "League Spartan", sans-serif;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: ${px2vw(12)} 0 ${px2vw(11)} 0;

    font-weight: 700;
    font-size: ${px2vw(12)};
    line-height: ${px2vw(25)};
    letter-spacing: ${px2vw(2.57)};
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;

    span {
      padding: 0 ${px2vw(28)};
      mix-blend-mode: normal;
      opacity: 0.5;
    }
  }

  .mercury-link {
    background: #419ebb;
  }
  .venus-link {
    background: #eda249;
  }
  .earth-link {
    background: #6d2ed5;
  }
  .mars-link {
    background: #d14c32;
  }
  .jupiter-link {
    background: #d83a34;
  }
  .saturn-link {
    background: #cd5120;
  }
  .uranus-link {
    background: #1ec1a2;
  }
  .neptune-link {
    background: #2d68f0;
  }
`;
