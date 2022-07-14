import React, { useContext } from "react";

import Search from "../components/Search";
import hero from "../assets/hero.png";
import { Container, Title, HeroImage } from "../styles/pages/Home";
import { SearchContext } from "../context/SearchContext";
import DashboardSkeleton from "../components/Skeletons/DashboardSkeleton";
import Dashboard from "../components/Dashboard";
import ErrorPopup from "../components/ErrorPopup";

const Home: React.FC = () => {
  const {
    searchState: { data, loading, error }
  } = useContext(SearchContext);
  if (!data && !loading) {
    return (
      <>
        <Container>
          <div>
            <Title>Github Search</Title>
            <Search />
          </div>

          <div>
            <HeroImage src={hero} alt="Github Search" />
          </div>
        </Container>
        {error && <ErrorPopup />}
      </>
    );
  }

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (data && !loading && !error) {
    return <Dashboard />;
  }
};

export default Home;
