import { createGlobalStyle } from 'styled-components';
import '../App.css';

const GlobalStyle = createGlobalStyle`
    *{
        body{
            margin : 0 auto;
            background-color: pink;
        }
        font-family: 'locus_sangsang';
        a {
            text-decoration: none;
        }
    }

    
`;

export default GlobalStyle;
