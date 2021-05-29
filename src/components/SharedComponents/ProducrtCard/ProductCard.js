import React from "react";

const ProductCard = ({ data }) => {
  const { name, price, img } = data;
  return (
    <div className='product-card'>
      <div className='profuct-image'>
        <img src={img} alt='' />
      </div>
      <div className='product-info'>
        <h1>{name}</h1>
        <p>{price} $</p>
        <button> + </button>
      </div>
    </div>
  );
};

export default ProductCard;
