import React from "react";
import Head from "next/head";

import Search from "../components/search";
import hero from "../assets/hero.png";
import { Container, Title, HeroImage } from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Github Search</title>
      </Head>

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

export default Home;
