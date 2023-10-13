import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";
import { TitleBig, TitleMedium } from "../UI";
import { colorFrontEnd, colorBackEnd, colorSoftSkills, colorDataScience, colorBlackDark } from "../UI/variables";
import imgBanner from '../../assets/img/imgbanner.jfif';
import banner from '../../assets/img/banner.jfif';
import BannerItem from "../BannerItem";


const StyledDiv = styled.div`
  position: absolute;
  z-index: -1;
`;

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, height: '0px', width: '0px'}}
        onClick={onClick}
      />
    );
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, height: '0px', width: '0px'}}
        onClick={onClick}
      />
    );
  }

const BannerSlider = ({categories, videos}) => {
    const videoCategories = videos.map((video) => video.category);

    const settings = {
        dots: false,
        swipe: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        };

    return (
        <div>
            <Slider {...settings}>
                {categories.map((cat, i) => videoCategories.includes(cat.name) && <BannerItem key={i} categoryData={cat} videoData={videos.filter((video) => video.category === cat.name)} />)}
            </Slider>
        </div>
    );
};

export default BannerSlider;