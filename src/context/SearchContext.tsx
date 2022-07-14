import React from "react";
import { api } from "../services/api";
import type { AxiosError } from "axios";

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
  error: boolean;
  errorMessage: string;
  loading: boolean;
  data: IUserGithub;
}

interface ISearchContext {
  searchState: ISearchState;
  handleSearchSubmit(value: { github: string }): Promise<void>;
  handleClickCleanData(): void;
}

const SearchContext = React.createContext({} as ISearchContext);

const SearchContextProvider: React.FC = ({ children }) => {
  const [searchState, setSearchState] = React.useState<ISearchState>({
    error: false,
    errorMessage: "",
    loading: false,
    data: null
  });

  async function handleSearchSubmit({ github }) {
    setSearchState({
      loading: true,
      data: null,
      error: false,
      errorMessage: ""
    });

    await api
      .get<IUserGithub>(`/${github}`)
      .then(res => {
        setSearchState({
          loading: false,
          data: res.data,
          error: false,
          errorMessage: ""
        });
      })
      .catch((err: AxiosError) => {
        console.log(err.code);

        if (err) {
          setSearchState({
            error: true,
            errorMessage: err.message,
            data: null,
            loading: false
          });
        }
      });
  }

  function handleClickCleanData() {
    setSearchState({
      error: false,
      loading: false,
      data: null,
      errorMessage: ""
    });
  }

  return (
    <SearchContext.Provider
      value={{
        searchState,
        handleSearchSubmit,

        handleClickCleanData
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
