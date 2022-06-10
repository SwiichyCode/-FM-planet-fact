import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const LogoWrapper = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: ${px2vw(28)};
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  a {
    text-decoration: none;
    color: var(--primary-white);
  }
`;
