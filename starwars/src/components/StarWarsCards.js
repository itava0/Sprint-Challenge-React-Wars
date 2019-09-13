import React from 'react';
import styled from 'styled-components'

const Cards = styled.div `

`
const Title = styled.h2 `
`
const Name = styled.h3 `
`
const Gender = styled.p `
` 
const Birth = styled.p `
`
const Height = styled.p `
`
const EyeColor = styled.p `
`
const StarWarsCards = props =>{
 return (
  <Cards key={props.name}>
  <Title>StarWars</Title> 
  <Name>{props.title}</Name> 
  <Gender>{props.gender}</Gender> 
  <Birth>{props.birthDate}</Birth> 
  <Height>{props.height}</Height> 
  <EyeColor>{props.eyeColor}</EyeColor> 
  </Cards>
 );
}

export default StarWarsCards;



