import Slider from "react-slick";
import styled from "styled-components";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoCard from "../VideoCard";
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';

const StyledDiv = styled.div`
  width: 100%;
  padding-right: 2.5rem;
`;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height: '100%', width: '1.5rem', display: 'flex', alignItems: 'center'}}
      onClick={onClick}
    >
      <SlArrowRight style={{fontSize: '1.25rem'}} />
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, height: '100%', width: '1.5rem', display: 'flex', alignItems: 'center'}}
      onClick={onClick}
    >
      <SlArrowLeft style={{fontSize: '1.25rem'}} />
    </div>
  );
}

const VideoSlider = ({videoData, borderColor}) => {

  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 969,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 679,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <StyledDiv>
      <Slider {...settings} >
        {videoData.map((video, i) => <VideoCard key={i} video={video.video} image={video.image} borderColor={borderColor} />)}
      </Slider>
    </StyledDiv>
  );
};

export default VideoSlider;