import React from "react";

const Card = ({image,key,name}) => {
  return (
    <div
      key={key}
      className="bg-gray-100 text-black flex items-center w-full px-7 py-6 rounded mb-3 place-content-between"
    >
      <img src={image} alt={name} className="h-40" />
      <h1>{name}</h1>
    </div>
  );
};

export default Card;
