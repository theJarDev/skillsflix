import {createGlobalStyle} from 'styled-components';
import { colorGrayLight } from '../UI/variables';

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 16px;
    }

    * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${colorGrayLight};
    
    .slick-prev:before, .slick-next:before {
        display: none;
    }
    }
    body {
        background-color: #090910;
    }
`;

export default GlobalStyle;