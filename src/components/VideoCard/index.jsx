import styled from "styled-components";
import { colorFrontEnd } from "../UI/variables";
import img from "../../assets/img/card0.jfif";

const Card = styled.a`
    /* margin-right: 1.35rem; */
        

    .img {
        max-width: 27rem;
        /* max-height: 16rem; */
        /* max-width: 18rem;
        max-height: 10rem; */
        border-radius: 0.25rem;
        border: 4px solid ${({bordercolor}) => bordercolor};
    }

    @media (min-width: 1536px) and (max-width: 1919px) {
        .img {
            max-width: 22rem;
        }
    }

    @media (max-width: 1279px) {
        .img {
            max-width: 18.125rem;
        }
    }
`;

const VideoCard = ({video, image, borderColor}) => {

    return (
        <Card href={video} bordercolor={borderColor} target="_blank">
            <img className="img" src={image} />
        </Card>
    )
}

export default VideoCard;