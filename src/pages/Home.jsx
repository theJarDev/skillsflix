import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from '../assets/img/banner.jfif';
import imgBanner from '../assets/img/imgbanner.jfif';
import { TitleBig, TitleMedium } from "../components/UI";
import { colorBackEnd, colorBlackDark, colorFrontEnd, colorGrayLight, colorSoftSkills } from "../components/UI/variables";
import Category from "../components/Category";
import FirstCategory from "../components/FirstCategory";

const MainContainer = styled.main`
    /* background-color: ${colorBlackDark}; */
`;

const ButtonContainer = styled.div`
    position: relative;
`;

const BtnNuevoVideo = styled.button`
    background-color: transparent;
    position: absolute;
    top: -4.5rem;
    right: 2.5rem;
    width: 180px;
    height: 54px;
    font-size: 1.25rem;
    color: ${colorGrayLight};
    border-color: ${colorGrayLight};
    cursor: pointer;
`;

const Banner = styled.section`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    /* gap: 20rem; */
    padding-bottom: 11rem;
    padding-left: 2.5rem;
    padding-right: 3.25rem;
    /* background-image: url(${banner}); */
    background: linear-gradient(180deg, rgba(2, 50, 84, 0.3) 41.15%, ${colorBlackDark} 100%), url(${banner}), lightgray 50% / cover no-repeat;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* filter: opacity(.3); */
    height: 55rem;

    .info-container p {
        max-width: 41.3125rem;
        height: 6.875rem;
        font-weight: 400;
    }
`;

const BannerImg = styled.a`

    .card {
        max-width: 40.375rem;
        max-height: 22rem;
        border: 4px solid ${colorFrontEnd};
        border-radius: .25rem;
    }
`;

const Home = () => {
    return (
        <MainContainer>
            <Link to='/add-video'>
                <ButtonContainer>
                    <BtnNuevoVideo>
                        Nuevo video
                    </BtnNuevoVideo>
                </ButtonContainer>
            </Link>
            <Banner>
                <div className="info-container">
                    <TitleBig width='18.5rem' background='true' marginbottom='2.5rem' >Front End</TitleBig>
                    <TitleMedium>Challenge React</TitleMedium>
                    <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
                </div>
                {/* <BannerImg src={imgBanner}/> */}
                <BannerImg href="https://www.youtube.com/watch?v=ov7vA5HFe6w" target="_blank">
                    <img className="card" src={imgBanner}/>
                </BannerImg>
            </Banner>
            <FirstCategory />
            <Category name={'Back End'} color={colorBackEnd} />
            <Category name={'Soft Skills'} color={colorSoftSkills} />
        </MainContainer>
    );
}

export default Home;