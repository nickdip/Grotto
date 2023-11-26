"use client";

export const ToyCard = ({ toy }) => {

  toy.price = toy.price.toString()
  if (toy.price.length === 3) toy.price += "0"

  return (
    <div className="toy-card flex flex-col justify-center content-center text-center">
      <h1 className="text-4xl p-2">{toy.name}</h1>
      <img className="w-13 max-w-xs flex content-center justify-center" src={toy.image_link}></img>
      <p>{toy.description}</p>
      <p>£{toy.price}</p>
      <p>Sustainable choice: {toy.sustainability}</p>
    </div>
  );
};
