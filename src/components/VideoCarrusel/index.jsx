import styled from "styled-components"
import VideoCard from "../VideoCard";
import { colorBlackDark } from "../UI/variables";

const CardContainer = styled.div`
    display: flex;
    gap: 1.35rem;
    overflow-x: hidden;
    /* flex-direction: row-reverse; */
    /* background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 41.15%, rgba(0, 0, 0, 0.00) 100%); */
`;

const VideoCarrusel = () => {
    return (
        <CardContainer>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
        </CardContainer>
    )
}

export default VideoCarrusel;