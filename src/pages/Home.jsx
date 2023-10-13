import { useContext } from "react";
import { DataContext } from '../context/DataContext';
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from '../assets/img/banner.jfif';
import imgBanner from '../assets/img/imgbanner.jfif';
import { TitleBig, TitleMedium } from "../components/UI";
import { colorBackEnd, colorBlackDark, colorFrontEnd, colorGrayLight, colorSoftSkills } from "../components/UI/variables";
import Category from "../components/Category";
import BannerSlider from "../components/BannerSlider";

const MainContainer = styled.main`
    /* background-color: ${colorBlackDark}; */
`;

const ButtonContainer = styled.div`
    position: relative;
`;

const Container = styled.div`
    position: relative;
    z-index: -1;
`;

const BtnNuevoVideo = styled.button`
    background-color: transparent;
    position: absolute;
    top: -4.75rem;
    right: 2.5rem;
    width: 180px;
    height: 54px;
    font-size: 1.25rem;
    color: ${colorGrayLight};
    border-color: ${colorGrayLight};
    border-radius: 0.25rem;
    cursor: pointer;
`;

const StyledDiv = styled.div`
    margin-top: -10.5rem;
`;
// const AbsoluteContainer = styled.div`
//     position: absolute;
//     z-index: -1;
// `;

const Home = () => {

    const {categories, videos} = useContext(DataContext);

    return (
        <MainContainer>
            <Link to='/add-video'>
                <ButtonContainer>
                    <BtnNuevoVideo>
                        Nuevo video
                    </BtnNuevoVideo>
                </ButtonContainer>
            </Link>
            <Container>
                <BannerSlider categories={categories} videos={videos} />
            </Container>
            <StyledDiv>
                {categories.map((cat, i) => <Category key={i} categoryData={cat} videoData={videos.filter((video) => video.category === cat.name )} />)}
            </StyledDiv>
        </MainContainer>
    );
}

export default Home;