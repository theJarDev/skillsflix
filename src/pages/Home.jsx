import { useContext } from "react";
import { DataContext } from '../context/DataContext';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorPrimary, colorGrayLight } from "../components/UI/variables";
import Category from "../components/Category";
import BannerSlider from "../components/BannerSlider";

const ButtonContainer = styled.div`
    position: relative;
    
    @media (max-width: 767px) {
        display: none;
    }
`;

const Container = styled.div`
    position: relative;
    /* z-index: -1; */
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
    position: relative;
    /* z-index: 1; */

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: -10.5rem;
    }

    @media (max-width: 767px) {
        margin-top: -6rem;
    }
`;

const NewVideoMobileBtn = styled.button`
    display: none;

    @media (max-width: 767px) {
        display: block;
        background-color: ${colorPrimary};
        width: calc(100% - 2rem);
        /* width: 100%; */
        text-align: center;
        font-size: 1.375rem;
        font-weight: 600;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 1rem 0;
        margin-left: 1rem;
        margin-top: 6rem;
        margin-bottom: -4rem;
    }
`;

const Home = () => {

    const {categories, videos} = useContext(DataContext);

    return (
        <main>
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
            <Link to='add-video'>
                <NewVideoMobileBtn>Nuevo video</NewVideoMobileBtn>
            </Link>
        </main>
    );
}

export default Home;