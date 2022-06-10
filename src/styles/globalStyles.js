import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    // Reset
    ${reset}

    // Colors
    :root {
        --primary-white: #FFFFFF;
        --primary-black: #070724;
        --primary-grey-one: #38384F;
        --primary-grey-two: #838391;

        --secondary-blue-one: #419EBB;
        --secondary-yellow: #EDA249;
        --secondary-purple: #6D2ED5;
        --secondary-orange-one: #D14C32;

        --tertiary-red: #D83A34;
        --tertiary-orange-two: #CD5120;
        --tertiary-cyan: #1EC1A2;
        --tertiary-blue-two: #2D68F0;
    }
`;

export default GlobalStyle;
