import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

import { Container } from "./styles";

const ErrorPopup: React.FC = () => {
  const {
    searchState: { errorMessage }
  } = useContext(SearchContext);
  return (
    <Container>
      <span>{errorMessage}</span>
    </Container>
  );
};

export default ErrorPopup;
