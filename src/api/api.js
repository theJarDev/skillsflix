import axios from "axios";

export const getCategoriesAxios = async(setData) => {
    try {
        const res = await axios.get('https://json-server-skillsflix.vercel.app/categories');
        setData(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getVideosAxios = async(setData) => {
    try {
        const res = await axios.get('https://json-server-skillsflix.vercel.app/videos');
        setData(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const addCategoryAxios = async(data) => {
    try {
        
        const res = await axios.post('https://json-server-skillsflix.vercel.app/categories', {...data});
        console.log('categoria creada! ', res);
    } catch (err) {
        console.error(err);
    }
};

export const addVideoAxios = async(data) => {
    try {
        await axios.post('https://json-server-skillsflix.vercel.app/videos', {...data});
        console.log('categoria creada!');
    } catch (err) {
        console.log(err);
    }
};

export const updateCategoryAxios = async(id, data) => {
    try {
        await axios.put(`https://json-server-skillsflix.vercel.app/categories/${id}`, {...data});
        console.log('categoria actualizada!');
    } catch (err) {
        console.log(err);
    }
};

export const deleteCategoryAxios = async(id) => {
    try {
        await axios.delete(`https://json-server-skillsflix.vercel.app/categories/${id}`);
        console.log('categoria eliminada!');
        
    } catch (err) {
        console.log(err);
    }
};