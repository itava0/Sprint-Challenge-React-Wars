import React, { useState, useEffect } from "react";
import StarWarsCards from "./StarWarsCards";
import axios from "axios";
import { Img } from "../../src/components/Data";

function StartWars() {
  const [star, setstar] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        const people = res.data.results;
        console.log(res.data.results);
        setstar(people);
      })
      .catch(err => {
        console.log("The Data was not returned", err);
      });
  }, []);
  return (
    <div>
      {star.map(person => {
        return (
          <StarWarsCards
            key={person.name}
            title={person.name}
            birthDate={person.birth_year}
            gender={person.gender}
            height={person.height}
            eyeColor={person.eye_color}
          />
        );
      })}
    </div>
  );
}

export default StartWars;
