import { css } from "styled-components";

export default css`
  body {
    background-color: #000;
    color: white;
    padding: 3em;
  }

  a {
    color: white;
  }

  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .fade-exit {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .fade-exit-active {
    opacity: 0;
    z-index: 1;
  }
`;
