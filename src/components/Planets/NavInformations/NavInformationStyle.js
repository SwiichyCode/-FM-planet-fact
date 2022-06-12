import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const NavInformationsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  gap: 16px;
  margin-top: 39px;
  font-family: "League Spartan", sans-serif;

  @media (max-width: 768px) {
    width: 281px;
    margin-left: 1em;
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    padding: 12px 0 11px 0;

    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: ${px2vw(2.57)};
    text-transform: uppercase;
    color: #ffffff;
    text-decoration: none;

    @media (max-width: 768px) {
      font-size: 9px;
    }

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
