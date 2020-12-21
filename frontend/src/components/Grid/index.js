import React, { useEffect, useState } from "react";

// API
import api from "../../services/api";

const Grid = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get("pokemon?limit=10").then(({ data }) => {
      setPokemons(data.results);
    });
  }, []);

  return (
    <ul>
      {console.log(pokemons)}
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default Grid;
