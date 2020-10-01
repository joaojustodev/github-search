import React, { ChangeEvent, FormEvent } from "react";
import { api } from "../services/api";

interface IUserGithub {
  name: string;
  login: string;
  avatar_url: string;
  public_repos: number;
  bio: string;
  html_url: string;
  email: string;
  twitter_username: string;
  blog: string;
  location: string;
  followers: string;
  following: string;
  created_at: string;
}

interface ISearchState {
  input: string;
  error: string;
  loading: boolean;
  data: IUserGithub;
}

interface ISearchContext {
  searchState: ISearchState;
  handleSearchSubmit(event: FormEvent): Promise<void>;
  handleInputSearchChange(event: ChangeEvent<HTMLInputElement>): void;
  handleClickCleanData(): void;
}

const SearchContext = React.createContext<ISearchContext>(null);

const SearchContextProvider: React.FC = ({ children }) => {
  const [searchState, setSearchState] = React.useState<ISearchState>({
    input: "",
    error: "",
    loading: false,
    data: null
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
          input: "",
          error: "status is not 200",
          loading: false
        });
      }

      setSearchState({
        ...searchState,
        input: "",
        error: "",
        loading: false,
        data: response.data
      });
    } catch (error) {
      if (error) {
        setSearchState({
          ...searchState,
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

  function handleClickCleanData() {
    setSearchState({
      input: "",
      error: "",
      loading: false,
      data: null
    });
  }

  return (
    <SearchContext.Provider
      value={{
        searchState,
        handleSearchSubmit,
        handleInputSearchChange,
        handleClickCleanData
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
