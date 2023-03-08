import React from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { HomeContainer } from "./Home.style";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Card />
      </div>
    </HomeContainer>
  );
};

export default Home;
