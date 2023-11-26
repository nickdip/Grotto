"use client";

const ToyCard = ({ toy }) => {
  return (
    <div className="toy-card">
      <h3>{toy.name}</h3>
      <img src={toy.imgage_link}></img>
      <p>{toy.description}</p>
      <p>{toy.price}</p>
      <p>Sustainable choice: {toy.sustainability}</p>
    </div>
  );
};

export default ToyCard;
