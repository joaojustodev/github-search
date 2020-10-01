import React, { ChangeEvent, FormEvent } from "react";
import { api } from "../services/api";

interface ISearchState {
  input: string;
  error: string;
  loading: boolean;
}

interface ISearchContext {
  searchState: ISearchState;
  handleSearchSubmit(event: FormEvent): Promise<void>;
  handleInputSearchChange(event: ChangeEvent<HTMLInputElement>): void;
}

const SearchContext = React.createContext<ISearchContext>(null);

const SearchContextProvider: React.FC = ({ children }) => {
  const [searchState, setSearchState] = React.useState<ISearchState>({
    input: "",
    error: "",
    loading: false
  });

  async function handleSearchSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      if (!searchState.input) {
        return;
      }

      setSearchState({
        ...searchState,
        loading: true
      });

      const response = await api.get(`/${searchState.input}`);
      if (response.status !== 200) {
        setSearchState({
          ...searchState,
          error: "status is not 200",
          loading: false
        });
      }
      console.log(response.data);
    } catch (error) {
      if (error) {
        setSearchState({
          input: "",
          error: "Catch error",
          loading: false
        });
      }
    }
  }

  function handleInputSearchChange(event: ChangeEvent<HTMLInputElement>) {
    const SearchInputValue = event.target.value;

    setSearchState({
      ...searchState,
      input: SearchInputValue
    });
  }

  return (
    <SearchContext.Provider
      value={{ searchState, handleSearchSubmit, handleInputSearchChange }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
