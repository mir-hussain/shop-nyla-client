import React, { useState } from "react";
import "./Shop.scss";
import ProductCard from "../SharedComponents/ProducrtCard/ProductCard";
import allProducts from "../../fakeData";
import men from "../../fakeData/adidasMenCloth";
import women from "../../fakeData/adidasWomenCloth";
import shoe from "../../fakeData/adidasShoe";

const Shop = () => {
  let data = "allProducts";

  const [category, setCategory] = useState("allProducts");
  console.log(category);

  if (data === "allProducts") {
  }

  const handleCategory = (event) => {
    setCategory(event.target.name);
  };

  return (
    <section className='shop-section'>
      <div>
        <button name='allProducts' onClick={handleCategory}>
          All products
        </button>
        <button name='women' onClick={handleCategory}>
          Women
        </button>
        <button name='men' onClick={handleCategory}>
          Men
        </button>
        <button name='shoe' onClick={handleCategory}>
          Shoe
        </button>
      </div>
      <div className='products-container'>
        {allProducts.map((data) => (
          <ProductCard key={data.key} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
