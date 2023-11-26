"use client";

import "../app/toys/style.css";

export const ToyCard = ({ toy }) => {
  return (
    <div className="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image_link} style={{ height: "40%" }}></img>
      <h2>£{toy.price.toFixed(2)}</h2>
      <p>{toy.description}</p>
      <p>Sustainable choice: {toy.sustainability}</p>
    </div>
  );
};
