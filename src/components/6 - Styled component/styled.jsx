import React from "react";
import { Container, Title, Description, Box } from "./style";

export default class Styled extends React.Component {
  render() {
    return (
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
      </Container>
    );
  }
}
