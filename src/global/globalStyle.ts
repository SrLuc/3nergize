import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100vh;
        width: 100%;
        
    }
    body{
        //font-family: 'Catamaran', sans-serif;
        //font-family: "Jost", sans-serif;
        //font-family: 'Ubuntu', sans-serif;
        //font-family: 'Raleway', sans-serif;
        font-family: 'Poppins', sans-serif;
    }
    button{
        outline: none;
        border: none;
    }
    a{
        outline: none;
        text-decoration: none;
    }
`;

export default GlobalStyle;