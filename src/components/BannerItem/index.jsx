import { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { TitleBig, TitleMedium, TitleBannerMobile } from "../UI";
import { colorBlackDark, colorFrontEnd } from "../UI/variables";
import banner from '../../assets/img/banner.jfif';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoCard from "../VideoCard";
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import VideoSlider from "../VideoSlider";

const StyledDiv = styled.div`
    width: 100%;
    padding-right: 2.5rem;
    padding-left: 2.5rem;
    margin-top: -4rem;
`;

const Banner = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
    /* gap: 20rem; */
    padding-bottom: 11rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    /* padding-right: 3.25rem; */
    /* background-image: url(${banner}); */
    background: linear-gradient(180deg, rgba(2, 50, 84, 0.3) 41.15%, rgba(9, 9, 16, 1) 100%), url(${banner}), lightgray 50% / cover no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* filter: opacity(.3); */
    width: 100%;
    height: 50rem;

    .info-container p {
        max-width: 41.3125rem;
        height: 6.875rem;
        font-weight: 400;
        line-height: 1.5rem;
    }

    @media (min-width: 1024px) and (max-width: 1279px) {

        .info-container p {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        padding-bottom: 11rem;
        height: 34rem;

        .info-container p {
            display: none;
        }
    }

    @media (max-width: 767px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 6rem;
        gap: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 34rem;

        .info-container p {
            display: none;
        }
    }
`;

const BannerImg = styled.a`

    .card {
        max-width: 40.375rem;
        max-height: 22rem;
        border: 4px solid ${({bordercolor}) => bordercolor };
        border-radius: .25rem;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        .card {
            max-width: 18.125rem;
        }
    }

    @media (max-width: 767px) {
        /* align-self: center; */
        .card {
            max-width: 18.125rem;
        }
    }
`;

const BannerItem = ({categoryData, videoData}) => {
    const [index, setIndex] = useState(0);
    // const selectedVideo = videoData.shift();
    const selectedVideo = videoData[index];
    // console.log(videoData);

    return (
    <>
        <Banner>
                <div className="info-container">
                    <TitleBig width='fit-content' background={categoryData.color} marginbottom='2.5rem' display='none'> {categoryData.name} </TitleBig>
                    <TitleMedium> {selectedVideo.title} </TitleMedium>
                    <p> {selectedVideo.description} </p>
                </div>
                <BannerImg href={selectedVideo.video} target="_blank" bordercolor={categoryData.color}>
                    <img className="card" src={ selectedVideo.image }/>
                </BannerImg>
                <TitleBannerMobile background={categoryData.color}> {categoryData.name} </TitleBannerMobile>
        </Banner>
    </>
    );
};

export default BannerItem;