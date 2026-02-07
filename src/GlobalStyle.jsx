import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html:focus-within {
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul,
  li,
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  body {
    display: block;
    margin: 0;
    background-color: var(--primary-color);
    color: var(--light-color);
    font: 200 18px/1.5 ${(p) => p.theme.fonts.body};
  }
`;
