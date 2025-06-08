import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "../src/ui/Button";
import Input from "../src/ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: green;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <StyledApp>
        <GlobalStyles />
        <H1>The Wild Oasis</H1>
        <Input type="number" placeholder="Number of people" />
        <Button onClick={() => alert("alooooooo")}>Check in</Button>
      </StyledApp>
    </>
  );
}
