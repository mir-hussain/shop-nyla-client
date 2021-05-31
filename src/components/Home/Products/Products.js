import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import data from "../../../fakeData";
import ProductsCard from "../../SharedComponents/ProducrtCard/ProductCard";
import "./Products.scss";

const Products = ({error}) => {
  
  return (
    <section className='product-overview'>
      <h1 className='product-overview-header'>
        Product Overview
      </h1>
      <div className='products-container'>
        {data.slice(0, 8).map((data) => (
          <ProductsCard data={data} key={data.key} />
        ))}
      </div>
      <h3 className='error'>{error}</h3>
      <div className='view-all-btn-container'>
        <Link className='btn-secondary' to='/shop'>
          View All
        </Link>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    error: state.cartReducer.error
  }
}

export default connect(mapStateToProps)(Products);
