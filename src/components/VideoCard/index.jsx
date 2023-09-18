import styled from "styled-components";
import { colorFrontEnd } from "../UI/variables";
import img from "../../assets/img/card0.jfif";

const Card = styled.a`
    /* margin-right: 1.35rem; */

    .img {
        width: 27rem;
        height: 16.30313rem;
        border-radius: 0.25rem;
        border: 4px solid ${colorFrontEnd};
    }
`;

const VideoCard = () => {
    return (
        <Card href="https://www.youtube.com/watch?v=PztCEdIJITY" target="_blank">
            <img className="img" src={img} />
        </Card>
    )
}

export default VideoCard;