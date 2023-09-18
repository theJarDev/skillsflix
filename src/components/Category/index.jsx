import styled from "styled-components";
import VideoCarrusel from "../VideoCarrusel";
import { TitleSmall } from "../UI";

const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 3rem;
    padding-left: 2.5rem;

    .flex {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const Category = ({name, color}) => {
    return (
        <CategoryContainer>
            <div className="flex">
                <TitleSmall color={color} >{name}</TitleSmall>
                <p>Descripcion</p>
            </div>
            <VideoCarrusel />
        </CategoryContainer>
    );
}

export default Category;