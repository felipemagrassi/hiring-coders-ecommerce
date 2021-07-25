import React from "react";
import data from "../data";
import { Link, useParams } from "react-router-dom";

export default function ProductScreen({ props }) {
  const [cart, setCart] = props;
  const { id } = useParams();
  const product = data.products.find((x) => x.id === id);

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center pt-16">
        <h1 className="text-lg font-bold "> Product doesn't exist</h1>
        <Link className="font-bold text-red-600" to="/">
          {" "}
          Go Back
        </Link>
      </div>
    );
  }

  const handleCart = () => {
    let index = cart.find((e) => e.id === product.id);

    if (index === undefined) {
      setCart([...cart, { id: product.id, quantity: 1 }]);
    } else {
      let newCart = [...cart];
      // eslint-disable-next-line array-callback-return
      newCart.map((e) => {
        if (e.id === index.id) e.quantity++;
      });
      setCart(newCart);
    }
  };

  return (
    <div key="product.id" className="flex w-10/12 py-6 gap-5 mx-auto">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h1 className="text-4xl py-2 font-bold "> {product.name} </h1>
        <h3 className="text-lg "> {product.category}</h3>

        <h3 className="font-bold"> {product.price} </h3>
        <button
          className="rounded-md px-6 py-2 my-1 color text-white hover:opacity-50 border-none bg-black"
          onClick={handleCart}
        >
          {" "}
          Add to Cart{" "}
        </button>
      </div>
    </div>
  );
}
