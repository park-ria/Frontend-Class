import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Layout from "./components/Layout";
import reset from "styled-reset";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import MovieDetail from "./pages/MovieDetail";

const GlobalStyles = createGlobalStyle`
${reset}

*{
  margin: 0;
  padding: 0;
  box-sizing: 0;
}

ul, li{
  list-style:none;
}

a{
  text-decoration: none;
  color: inherit;
}

body{
  background:#000;
  color: #fff;
  }
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie",
        element: <Movie />,
      },
      {
        path: "movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
