import styled from "styled-components";
import { colorBackEnd, colorFrontEnd } from "./variables";

export const LogoHeader = styled.img`
    margin-left: 2.5rem;
    width: 12rem;

    @media (max-width: 767px) {
        margin-left: 0;
        width: 10rem;
    }
`;

export const LogoFooter = styled.img`
    width: 17rem;

    @media (max-width: 767px) {
        width: 14rem;
    }
`;

export const TitleBannerMobile = styled.h2`
    display: none;

    @media (max-width: 767px) {
        display: block;
        width: fit-content;
        text-align: center;
        font-weight: 400;
        background-color: ${({background}) => background };
        border-radius: 0.25rem;
        font-size: 3rem;
        /* margin-bottom: 0.5rem; */
        padding: .5rem 1rem;
    }
`;

export const TitleBig = styled.h2`
    width: ${({width}) => width };
    padding: 1rem;
    margin-bottom: ${({marginbottom}) => marginbottom };
    text-align: center;
    font-size: 3.75rem;
    font-weight: 400;
    background-color: ${({background}) => background };
    border-radius: 0.25rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 2.5rem;
    }

    @media (max-width: 767px) {
        display: ${({display}) => display };
        font-size: 2.1875rem;
        margin-bottom: 0.5rem;
        padding: .5rem 1rem;
    }
`;

export const TitleMedium = styled.h3`
    font-size: 2.875rem;
    font-weight: 400;
    margin-bottom: .6rem;

    @media (min-width: 768px) and (max-width: 1023px) {
        font-size: 1.5rem;
    }

    @media (max-width: 767px) {
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const TitleSmall = styled.h4`
    background-color: ${({color}) => color };
    font-size: 2.1875rem;
    font-weight: 400;
    text-align: center;
    padding: .5rem 1rem;
    border-radius: 0.25rem;

    @media (max-width: 1023px) {
        font-size: 1.5rem;
    }
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

    @media (max-width: 767px) {
        font-size: 1.375rem;
    }
`;