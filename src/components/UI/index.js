import styled from "styled-components";
import { colorBackEnd, colorFrontEnd } from "./variables";

export const Logo = styled.img`
    margin-left: ${({marginleft}) => marginleft };
    width: ${({width}) => width };
`;

export const TitleBig = styled.h2`
    width: ${({width}) => width};
    padding: .75rem;
    margin-bottom: ${({marginbottom}) => marginbottom };
    text-align: center;
    font-size: 3.75rem;
    font-weight: 400;
    background-color: ${({background}) => background && colorFrontEnd};
`;

export const TitleMedium = styled.h3`
    font-size: 2.875rem;
    font-weight: 400;
    margin-bottom: .6rem;
`;

export const TitleSmall = styled.h4`
    background-color: ${({color}) => color };
    font-size: 2.1875rem;
    font-weight: 400;
    text-align: center;
    padding: .5rem 1rem;
`;

export const Btn = styled.button`
    text-align: center;
    padding: 0.75rem 2.5rem;
    font-family: 'Source Sans 3', sans-serif;
    /* font-size: 1.3125rem; */
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background-color: ${({background}) => background};
    color: ${({color}) => color};
    cursor: pointer;
`;