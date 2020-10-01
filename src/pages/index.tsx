import React from "react";
import Head from "next/head";
import { SearchContext } from "../context/SearchContext";

import Home from "../components/home";
import Dashboard from "../components/dashboard";

const Landing: React.FC = () => {
  const { searchState } = React.useContext(SearchContext);
  return (
    <>
      <Head>
        <title>Github Search</title>
      </Head>
      {searchState.data ? <Dashboard /> : <Home />}
    </>
  );
};

export default Landing;
