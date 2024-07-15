import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: "giarek";
    src: local("giarek"), url("/public/fonts/giarekdemoversionregular-d9za6.ttf") format("truetype");

  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
