import React from "react";
import ProductCard from "../SharedComponents/ProducrtCard/ProductCard";
import data from "../../fakeData";

const Shop = () => {
  console.log(data);
  return (
    <div>
      {data.map((data) => (
        <ProductCard data={data} />
      ))}
    </div>
  );
};

export default Shop;
