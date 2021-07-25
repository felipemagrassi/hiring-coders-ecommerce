import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { id, name, category, price, image } = product;

  return (
    <div key={id}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <div>
        <Link to={`/product/${id}`}>
          <h2 className="uppercase text-black text-base font-bold">{name}</h2>
        </Link>
        <h3>{category}</h3>
        <h3 className="uppercase text-black text-sm font-bold">{price}</h3>
      </div>
    </div>
  );
}
