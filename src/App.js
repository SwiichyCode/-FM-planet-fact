import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header/Header";
import Planet from "./components/Planets/Planet/Planet";
import background from "./assets/background-stars.svg";

export default function App() {
  return (
    <Container>
      <Header />
      <Planet />
    </Container>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&display=swap");
  width: 100%;
  height: 100vh;
  background: var(--primary-black);
  background-image: url(${background});
  background-size: cover;
  overflow: hidden;
  font-family: "Antonio", sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    overflow: initial;
    height: 100%;
  }
`;
