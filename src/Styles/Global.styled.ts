import { createGlobalStyle } from 'styled-components';
import gameColors from './game-colors';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    line-height: 1.4;
  }
  body{
    font-family: 'Atkinson Hyperlegible', sans-serif;
    font-size: 1.6rem;
    min-height: 100vh;
    background-color: ${gameColors.backgroundColor};
    position:relative;
    #root{
      width: 90%;
      max-width: 60rem;
      margin: 0 auto;
    }
  } 
  img,svg {
    max-width: 100%;
    display: block;
  }
  input {
    font-family: inherit;
    border: none;
  }
  ul{
    list-style: none;
  }
  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;

export default GlobalStyles;
