import React from "react";
import data from "../data";
import Product from "./Product";

export default function ShopList() {
  return (
    <div className="grid grid-cols-3 w-10/12 mx-auto py-6 gap-5">
      {data.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
