import React from "react";
import "./Products.scss";
import data from "../../../fakeData";
import ProductsCard from "../../SharedComponents/ProducrtCard/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  console.log(data.slice(0, 8));
  return (
    <section className='product-overview'>
      <h1 className='product-overview-header'>
        Product Overview
      </h1>
      <div className='products-container'>
        {data.slice(0, 8).map((data) => (
          <ProductsCard data={data} />
        ))}
      </div>
      <div className='view-all-btn-container'>
        <Link className='btn-secondary' to='/shop'>
          View All
        </Link>
      </div>
    </section>
  );
};

export default Products;
