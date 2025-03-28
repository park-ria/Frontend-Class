import { Outlet } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  body{
    font-family: "Source Sans 3", serif;
  }
`;

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Root;
