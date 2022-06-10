import styled from "styled-components";
import px2vw from "../../../utils/px2vw";

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 85px;

  .header-items {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 ${px2vw(40)} 0 ${px2vw(32)};
  }

  .header-line {
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: var(--primary-white);
    mix-blend-mode: normal;
    opacity: 0.2;
  }
`;
