import React from "react";
import "./Home.scss";
import HotProducts from "./HotProducts/HotProducts";
import Landing from "./Landing/Landing";

const Home = () => {
  return (
    <main>
      <Landing />
      <HotProducts />
    </main>
  );
};

export default Home;
