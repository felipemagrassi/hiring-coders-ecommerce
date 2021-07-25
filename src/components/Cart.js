import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data";

export default function Cart({ props }) {
  // eslint-disable-next-line
  const [cart, setCart] = props;
  const [product, setProduct] = useState([]);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
  const [local, setLocal] = useState([]);

  const handleLocalStorage = () => {
    setLocal([
      ...product,
      { email: email },
      { address: address },
      { cpf: cpf },
    ]);
    localStorage.setItem(`@product`, JSON.stringify(local));
  };

  // const updateCart = (id, quantity) => {
  //   let index = cart.find(id);
  //   console.log(index);
  //   let newCart = [...cart];
  //   // eslint-disable-next-line array-callback-return
  //   newCart.map((e) => {
  //     if (e.id === index.id) e.quantity += quantity;
  //   });
  //   setCart(newCart);
  // };

  useEffect(() => {
    const a3 = cart.map((t1) => ({
      ...t1,
      ...data.products.find((t2) => t2.id === t1.id),
    }));
    setProduct(a3);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center pt-16">
        <h1 className="text-lg font-bold "> No products yet</h1>
        <Link className="font-bold text-red-600" to="/">
          {" "}
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto py-6 flex ">
      <ul className="flex flex-col justify-center ">
        {product.map((product) => (
          <li key={product.id}>
            <div className="flex">
              <img
                className="my-1 mx-4 w-1/6"
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col ">
                <h2 className="text-xl">{product.name}</h2>
                <h3>{product.category}</h3>
                <h3>{product.price}</h3>
                <h3> {`Quantity: ${product.quantity}`}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="email">
          <input
            required
            className="w-60 my-0.5 bg-gray-200"
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
          />
        </label>
        <label htmlFor="password">
          <input
            required
            type="password"
            className="w-60 my-0.5 bg-gray-200"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
          />
        </label>
        <label htmlFor="address">
          <input
            required
            className="w-60 my-0.5 bg-gray-200"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            placeholder="address"
          />
        </label>
        <label htmlFor="cpf">
          <input
            required
            className="w-60 my-0.5 bg-gray-200"
            id="cpf"
            onChange={(e) => setCPF(e.target.value)}
            value={cpf}
            placeholder="cpf"
          />
        </label>
        <button
          className="rounded-md px-6 py-2 my-1 color text-white hover:opacity-50 border-none bg-black"
          onClick={handleLocalStorage}
        >
          {" "}
          Comprar{" "}
        </button>
      </div>
    </div>
  );
}
