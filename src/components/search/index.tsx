import React from "react";
import { useRouter } from "next/router";
import { SearchContext } from "../../context/SearchContext";

import { FiSearch, FiX } from "react-icons/fi";
import { Form, Input, Button, ErrorMessage } from "./styles";

const Search: React.FC = () => {
  const {
    searchState,
    handleSearchSubmit,
    handleInputSearchChange
  } = React.useContext(SearchContext);

  return (
    <Form onSubmit={event => handleSearchSubmit(event)}>
      <div className="input-block">
        <Input
          type="text"
          placeholder="Search by users and orgs"
          name="github"
          id="github"
          onChange={event => handleInputSearchChange(event)}
          value={searchState.input}
        />
        <Button type="submit">
          <FiSearch />
        </Button>
      </div>
      {searchState.error && (
        <ErrorMessage>
          <FiX />
          {searchState.error}
        </ErrorMessage>
      )}
    </Form>
  );
};

export default Search;
