// Card.js
import React from "react";

function Card({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
    </div>
  );
}

export default Card;
