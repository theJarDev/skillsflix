import { createContext, useState } from "react";

export const DataContext = createContext();

const categoryFixed = [{
    name: 'Front End',
    description: 'Videos que me han ayudado a mejorar mi conocimiento en el front end',
    color: '#6BD1FF',
    id: '12345'
},
{
    name: 'Back End',
    description: 'Videos que me han ayudado a mejorar mi conocimiento en el back end',
    color: '#00C86F',
    id: '12345'
},
{
    name: 'Soft Skills',
    description: 'Videos que me han ayudado a mejorar mi conocimiento en Soft Skills',
    color: '#FF8C2A',
    id: '12345'
},
{
    name: 'Data Science',
    description: 'Videos que planeo ver para adentrarme en el data science',
    color: '#9CD33B',
    id: '12345'
}];

const videosFixed = [{
    title: '¿Cuándo usar let, var y const?',
    video: 'https://www.youtube.com/watch?v=PztCEdIJITY',
    image: 'https://i.ytimg.com/vi/PztCEdIJITY/maxresdefault.jpg',
    category: 'Front End',
    description: 'jaksskjsa',
    id: '12345'
},
{
    title: '¿Qué es JavaScript?',
    video: 'https://www.youtube.com/watch?v=GJfOSoaXk4s',
    image: 'https://i.ytimg.com/vi/GJfOSoaXk4s/maxresdefault.jpg',
    category: 'Front End',
    description: 'kacksdnc',
    id: '12345'
},
{
    title: 'Spring Framework',
    video: 'https://www.youtube.com/watch?v=t-iqt1b2qqk',
    image: 'https://i.ytimg.com/vi/t-iqt1b2qqk/maxresdefault.jpg',
    category: 'Back End',
    description: 'adadasfcvdascv',
    id: '12345'
},
{
    title: '¿Qué es SQL y NoSQL?',
    video: 'https://www.youtube.com/watch?v=cLLKVd5CNLc',
    image: 'https://i.ytimg.com/vi/cLLKVd5CNLc/maxresdefault.jpg',
    category: 'Back End',
    description: 'asfvsrvfrfr',
    id: '12345'
},
{
    title: 'Simplificando tu código en Java: Conoce los enum',
    video: 'https://www.youtube.com/watch?v=EoPvlE85XAQ',
    image: 'https://i.ytimg.com/vi/EoPvlE85XAQ/maxresdefault.jpg',
    category: 'Back End',
    description: 'cjnsdnbcjd',
    id: '12345'
},
{
    title: '¿Por qué utilizar Java actualmente?',
    video: 'https://www.youtube.com/watch?v=3kNuK-XAHEY',
    image: 'https://i.ytimg.com/vi/3kNuK-XAHEY/maxresdefault.jpg',
    category: 'Backend',
    description: 'cdskjndjc',
    id: '12345'
},
{
    title: '¿Qué son las Soft Skills?',
    video: 'https://www.youtube.com/watch?v=vhwspfvI52k',
    image: 'https://i.ytimg.com/vi/vhwspfvI52k/maxresdefault.jpg',
    category: 'Soft Skills',
    description: 'djadncdaa',
    id: '12345'
},
{
    title: 'Equipo Front End',
    video: 'https://www.youtube.com/watch?v=rpvrLaBQwgg',
    image: 'https://i.ytimg.com/vi/rpvrLaBQwgg/maxresdefault.jpg',
    category: 'Front End',
    description: 'cdjknscdds',
    id: '12345'
},
{
    title: '7 Soft Skills más deseadas por las empresas',
    video: 'https://www.youtube.com/watch?v=YhR7Zp8NUzE',
    image: 'https://i.ytimg.com/vi/YhR7Zp8NUzE/maxresdefault.jpg',
    category: 'Soft Skills',
    description: 'ewfrgvrefrf',
    id: '12345'
},
{
    title: '¿Cómo un desarrollador Front End utiliza el Figma?',
    video: 'https://www.youtube.com/watch?v=UuAX5azcvDQ',
    image: 'https://i.ytimg.com/vi/UuAX5azcvDQ/maxresdefault.jpg',
    category: 'Front End',
    description: 'cdasdcascd',
    id: '12345'
}];

export const DataProvider = ({children}) => {
    const [videos, setVideos] = useState(videosFixed);
    const [categories, setCategories] = useState(categoryFixed);
    
    return (
        <DataContext.Provider value={{videos, setVideos, categories, setCategories}}>
            {children}
        </DataContext.Provider>
    );
}