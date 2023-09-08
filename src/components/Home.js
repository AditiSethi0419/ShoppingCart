import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import './style.css';

const Home = () => {
  const {
    state: { products },
    // productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();
//  console.log(products);
  //console.log(products.fastDelivery, products.id,products.price,products.ratings);
  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
            //console.log(prod.name)
           return <SingleProduct prod={prod} key={prod.id}/>
        })}
      </div>
    </div>
  );
};

export default Home;
