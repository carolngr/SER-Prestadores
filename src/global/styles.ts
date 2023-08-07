import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Poppins';
        margin: 0;
        padding: 0;
    }
    body{
        width: 100vw;
        height: 100vh;
        background: #f1f1f1;
        overflow-x: hidden;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
