import React, { useState } from "react";
import {
  Container,
  Title,
  Description,
  Box,
  Button,
  ButtonInh,
  Rotate,
  Day,
} from "./style";

import { ThemeProvider, createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
body{
    background: ${(props) => {
      return props.theme.bg;
    }};
    color: ${(props) => {
      return props.theme.cl;
    }};
}
`;

const Styled = () => {
  const [light, setLight] = useState({ type: true });
  const [btn, setBtn] = useState({ type: true });
  const theme = {
    bg: light.type ? "white" : "black",
    cl: light.type ? "black" : "white",
  };
  //   console.log(data);
  const changeBtn = () => {
    if (btn) {
      setBtn({ type: !btn.type });
      setLight({ type: !light.type });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Title>Styled Components</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          ipsum et fuga voluptates aperiam. Nam voluptatibus minus dolore!
          Praesentium suscipit ducimus incidunt tenetur ipsum perferendis
          accusamus maiores accusantium maxime error?
        </Description>
        <Box bg="white" type="large">
          Large
        </Box>
        <Box bg="blue" type="medium">
          Medium
        </Box>
        <Box bg="yellow" type="small">
          Small
        </Box>
        <Button>Click me</Button>
        <ButtonInh>Read more</ButtonInh>
        <Rotate>Rotate</Rotate>
        <Day onClick={changeBtn}>{btn.type ? "Tun" : "Kun"}</Day>
      </Container>
    </ThemeProvider>
  );
};

export default Styled;
