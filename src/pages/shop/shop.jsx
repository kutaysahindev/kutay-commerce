import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="hero">
        <div className="hero__bg">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2594&q=80"
              alt="hero"
            />
          </picture>
        </div>

        <div className="hero__cnt">
          <h1>Kutay Commerce</h1>
          <p className="hero__cnt--p">Where the quality begins...</p>
        </div>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
