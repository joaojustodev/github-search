import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { SearchContext } from "../../context/SearchContext";

import { FiSearch, FiX } from "react-icons/fi";
import { Form, Input, Button, ErrorMessage } from "./styles";

interface FormValue {
  github: string;
}
const Search: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormValue>();

  const { handleSearchSubmit } = useContext(SearchContext);
  return (
    <Form onSubmit={handleSubmit(e => handleSearchSubmit(e))}>
      <div className="input-block">
        <Input
          type="text"
          placeholder="Search by users and orgs"
          name="github"
          id="github"
          {...register("github", { required: "Type a user or org..." })}
        />
        <Button type="submit">
          <FiSearch />
        </Button>
      </div>
      {errors.github && (
        <ErrorMessage>
          <FiX />
          {errors.github.message}
        </ErrorMessage>
      )}
    </Form>
  );
};

export default Search;
