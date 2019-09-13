import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  flex-basis: auto;
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;
const Title = styled.h2`
  margin: 0;
  padding: 1rem;
  background: #2e9fd4;
  color: white;
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4);
`;
const Name = styled.h3`
  padding: 0.25rem 1rem;
`;

const Gender = styled.p`
  padding: 0.5rem 1rem;
  order: 99;
`;
const Birth = styled.p`
  padding: 0.5rem 1rem;
  order: 99;
`;
const Height = styled.p`
  padding: 0.5rem 1rem;
  order: 99;
`;
const EyeColor = styled.p`
  padding: 0.5rem 1rem;
  order: 99;
`;
const Img = styled.img`
  max-width: 300px;
  height: 30vh;
  object-fit: stretch;
`;
const Image = styled.img``;
const StarWarsCards = props => {
  return (
    <Cards key={props.name}>
      <Title>Character</Title>
      <Name>{props.title}</Name>
      <Gender>Gender: {props.gender}</Gender>
      <Birth>Birth Date: {props.birthDate}</Birth>
      <Height>Height: {props.height}</Height>
      <EyeColor>Eye Color: {props.eyeColor}</EyeColor>
    </Cards>
  );
};

export default StarWarsCards;
