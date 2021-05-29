import React, { useEffect, useState } from "react";
import "./Shop.scss";
import ProductCard from "../SharedComponents/ProducrtCard/ProductCard";
import allProducts from "../../fakeData";
import men from "../../fakeData/adidasMenCloth";
import women from "../../fakeData/adidasWomenCloth";
import shoe from "../../fakeData/adidasShoe";

const Shop = () => {
  const [category, setCategory] = useState("allProducts");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let data;

  if (category === "allProducts") {
    data = allProducts;
  } else if (category === "women") {
    data = women;
  } else if (category === "men") {
    data = men;
  } else if (category === "shoe") {
    data = shoe;
  }
  const handleCategory = (event) => {
    setCategory(event.target.name);
  };

  return (
    <section className='shop-section'>
      <div className='category'>
        <button
          className={
            category === "allProducts"
              ? "active-btn"
              : "inactive-btn"
          }
          name='allProducts'
          onClick={handleCategory}
        >
          All products
        </button>
        <button
          className={
            category === "women"
              ? "active-btn"
              : "inactive-btn"
          }
          name='women'
          onClick={handleCategory}
        >
          Women
        </button>
        <button
          className={
            category === "men"
              ? "active-btn"
              : "inactive-btn"
          }
          name='men'
          onClick={handleCategory}
        >
          Men
        </button>
        <button
          className={
            category === "shoe"
              ? "active-btn"
              : "inactive-btn"
          }
          name='shoe'
          onClick={handleCategory}
        >
          Shoe
        </button>
      </div>
      <div className='products-container'>
        {data.map((data) => (
          <ProductCard key={data.key} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Shop;
