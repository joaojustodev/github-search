import React from "react";
import Head from "next/head";
import { SearchContext } from "../context/SearchContext";

import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import ErrorPopup from "../components/ErrorPopup";
import DashboardSkeleton from "../components/Skeletons/DashboardSkeleton";

const Landing: React.FC = () => {
  const {
    searchState: { data, error, loading }
  } = React.useContext(SearchContext);
  return (
    <>
      <Head>
        <title>Github Search</title>
      </Head>
      <main>
        {data ? <Dashboard /> : loading ? <DashboardSkeleton /> : <Home />}
        {error && <ErrorPopup />}
      </main>
    </>
  );
};

export default Landing;
