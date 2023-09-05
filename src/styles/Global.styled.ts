import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Fira Code', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.secondaryFont};
    
    min-height: 360px;

  }

  a {
    text-decoration: none;
    cursor: pointer;
    
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: none;
  }


  section {
    background-color: ${theme.colors.primaryBg}
  }
  
  span {
    color: ${theme.colors.accent};
  }
  
`