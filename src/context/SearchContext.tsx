import React from "react";

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

  const baseURL = "https://api.github.com/users/";

  async function handleSearchSubmit({ github }) {
    setSearchState({
      loading: true,
      data: null,
      error: false,
      errorMessage: ""
    });

    const res = await fetch(`${baseURL}${github}`);

    if (res.status === 404) {
      setSearchState({
        error: true,
        errorMessage: "User not found...",
        data: null,
        loading: false
      });

      return;
    }

    if (res.status !== 200) {
      setSearchState({
        error: true,
        errorMessage: "Sorry, internal server error...",
        data: null,
        loading: false
      });

      return;
    }

    const data = await res.json();

    setSearchState({
      loading: false,
      data,
      error: false,
      errorMessage: ""
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
