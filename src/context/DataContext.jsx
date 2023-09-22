import { createContext, useState, useEffect } from "react";
import { getCategoriesAxios, getVideosAxios } from "../api/api";

export const DataContext = createContext();


export const DataProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getCategoriesAxios(setCategories);
        getVideosAxios(setVideos);
        
    }, []);
    
    return (
        <DataContext.Provider value={{videos, setVideos, categories, setCategories}}>
            {children}
        </DataContext.Provider>
    );
}