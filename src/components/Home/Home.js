import React from "react";
import Footer from "../SharedComponents/Footer/Footer";
import "./Home.scss";
import HotProducts from "./HotProducts/HotProducts";
import Landing from "./Landing/Landing";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Landing />
      <HotProducts />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
