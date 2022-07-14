import React from "react";

import Search from "../Search";
import hero from "../../assets/hero.png";
import { Container, Title, HeroImage } from "./styles";

const home: React.FC = () => {
  return (
    <Container>
      <div>
        <Title>Github Search</Title>
        <Search />
      </div>

      <div>
        <HeroImage src={hero} alt="Github Search" />
      </div>
    </Container>
  );
};

export default home;
