import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    font-family: Quicksand, sans-serif;
  }

  body, html{
    overflow-x: hidden;
  }
`;

export default GlobalStyles;