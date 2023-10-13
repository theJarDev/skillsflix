import { useContext, useState, useEffect } from "react";
import { DataContext } from '../../context/DataContext';
import styled from "styled-components";
import VideoCarrusel from "../VideoCarrusel";
import VideoSlider from "../VideoSlider";
import { TitleSmall } from "../UI";

const CategoryContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 3rem;
    padding-left: 2.5rem;
    /* margin-top: -4rem; */

    .flex {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const Category = ({categoryData, videoData}) => {
    const {name, color, description} = categoryData;

    return (
        <>
            {videoData.length > 0 && <CategoryContainer>
                <div className="flex">
                    <TitleSmall color={color} > {name} </TitleSmall>
                    <p> {description} </p>
                </div>
                <VideoSlider videoData={videoData} borderColor={color} />
            </CategoryContainer>}
        </>
    );
}

export default Category;