import axios from "axios";

export const getCategoriesAxios = async(setData) => {
    try {
        const res = await axios.get('http://localhost:3000/categories');
        setData(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const getVideosAxios = async(setData) => {
    try {
        const res = await axios.get('http://localhost:3000/videos');
        setData(res.data);
    } catch (err) {
        console.log(err);
    }
};

export const addCategoryAxios = async(data) => {
    try {
        
        const res = await axios.post('http://localhost:3000/categories', {...data});
        console.log('categoria creada! ', res);
    } catch (err) {
        console.error(err);
    }
};

export const addVideoAxios = async(data) => {
    try {
        await axios.post('http://localhost:3000/videos', {...data});
        console.log('categoria creada!');
    } catch (err) {
        console.log(err);
    }
};

export const updateCategoryAxios = async(id, data) => {
    try {
        await axios.put(`http://localhost:3000/categories/${id}`, {...data});
        console.log('categoria actualizada!');
    } catch (err) {
        console.log(err);
    }
};

export const deleteCategoryAxios = async(id) => {
    try {
        await axios.delete(`http://localhost:3000/categories/${id}`);
        console.log('categoria eliminada!');
        
    } catch (err) {
        console.log(err);
    }
};