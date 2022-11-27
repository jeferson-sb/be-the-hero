import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

  :root {
    --font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --bg-color: #f0f0f5;
    --primary-color: #e02041;
    --black: #333;
    --gray: #dcdce6;
  }

  *, *::before, *::after{
    box-sizing: border-box;
    outline: 0;
  }
  html{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body{
    height: 100%;
  }
  body{
    margin: 0;
    padding: 0;
    font: 400 14px var(--font-family);
    background-color: var(--bg-color);
  }

  ul[class],
  ol[class] {
    list-style: none;
    list-style-type: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
    border: 0;
  }

  form{
    input{
      width: 100%;
      height: 60px;
      color: var(--black);
      border: 1px solid var(--gray);
      border-radius: 8px;
      padding: 0 24px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2) inset;
    }
    textarea{
      width: 100%;
      resize: vertical;
      min-height: 140px;
      color: var(--black);
      border: 1px solid var(--gray);
      border-radius: 8px;
      padding: 16px 24px;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2) inset;
      line-height: 24px;
    }
    input:focus, textarea:focus{
      border: 2px solid var(--primary-color);
    }
  }
`;
