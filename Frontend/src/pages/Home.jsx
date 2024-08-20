import React from "react";
import Navbar from "../components.part/navbar";
import { GlobeDemo } from "../test";
import Card from "../components.part/Card";
import Footer from "../components.part/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <GlobeDemo />
      <Card />
      <Footer />
    </>
  );
};

export default Home;
