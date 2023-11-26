"use client";

import "../app/toys/style.css";

export const ToyCard = ({ toy }) => {

  toy.price = toy.price.toString()
  if (toy.price.length === 3) toy.price += "0"

  return (
    <div className="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image_link}></img>
      <h2>£{toy.price.toFixed(2)}</h2>
      <p>{toy.description}</p>
      <p>Sustainable choice: {toy.sustainability}</p>
    </div>
  );
};
