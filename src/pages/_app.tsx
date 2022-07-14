import React from "react";
import { AppProps } from "next/app";
import { SearchContextProvider } from "../context/SearchContext";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SearchContextProvider>
      <ThemeProvider theme={theme}>
        <main>
          <Component {...pageProps} />
        </main>
        <GlobalStyle />
      </ThemeProvider>
    </SearchContextProvider>
  );
};

export default MyApp;
