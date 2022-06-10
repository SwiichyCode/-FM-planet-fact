import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const NavWrapper = styled.nav`
  width: auto;
  height: 100%;
  max-height: ${px2vw(25)};

  ul {
    height: 100%;
    display: flex;
    gap: 0 ${px2vw(33)};

    font-family: "Spartan", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: ${px2vw(11)};
    line-height: ${px2vw(25)};
    letter-spacing: 1px;
    text-transform: uppercase;

    a {
      position: relative;
      text-decoration: none;
      color: var(--primary-white);

      &::after {
        content: "";
        width: 0%;
        position: absolute;
        top: -37px;
        left: 0;
        height: 4px;
      }
    }

    li:nth-child(1) a::after {
      background: var(--secondary-blue-one);
    }
    li:nth-child(2) a::after {
      background: var(--secondary-yellow);
    }
    li:nth-child(3) a::after {
      background: var(--secondary-purple);
    }
    li:nth-child(4) a::after {
      background: var(--secondary-orange-one);
    }
    li:nth-child(5) a::after {
      background: var(--tertiary-red);
    }
    li:nth-child(6) a::after {
      background: var(--tertiary-orange-two);
    }
    li:nth-child(7) a::after {
      background: var(--tertiary-cyan);
    }
    li:nth-child(8) a::after {
      background: var(--tertiary-blue-two);
    }

    a:hover::after {
      width: 100%;
    }

    .activeClassName::after {
      width: 100%;
    }
  }
`;
