import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margins:0;
        padding:0;
        box-sizing: border-box;
        
    }

    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color:#fff;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        background-color:#ac00e6;
        background-color:#4d4d4d;
    }
    h2{
        color:#fff;
    }
    h3{
        color:#333333;
    }
    img{
        display:block;
    }
    a{
        text-decoration:none;
        color:#333333
    }
`;

export default GlobalStyles;
