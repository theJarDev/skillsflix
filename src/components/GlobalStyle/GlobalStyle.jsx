import {createGlobalStyle} from 'styled-components';
import { colorBlackDark, colorGrayLight } from '../UI/variables';

const GlobalStyle = createGlobalStyle`
    * {
    /* background-color: ${colorBlackDark}; */
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: ${colorGrayLight};
    /* overflow-x: hidden; */
    }
    body {
        background-color: ${colorBlackDark};
    }
`;

export default GlobalStyle;