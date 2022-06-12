import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const LogoWrapper = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    padding: 32px 0 39px 0;
  }

  a {
    text-decoration: none;
    color: var(--primary-white);
  }
`;
