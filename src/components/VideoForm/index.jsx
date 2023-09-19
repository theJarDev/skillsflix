import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styleProps, colorBlackDark, colorBlackLighter, colorGrayDark, colorGrayMedium, colorPrimary } from "../UI/variables";
import { TitleBig, Btn } from "../UI";

const StyledForm = styled.form`
    width: 100%;
    padding: 3rem 2.5rem;

    .flex-buttons {
        display: flex;
        justify-content: space-between;
    }

    .flex-buttons div {
        display: flex;
        gap: 2.5rem;
    }

`;


const VideoForm = () => {
    const [title, setTitle] = useState({value: '', valid: true});
    const [video, setVideo] = useState({value: '', valid: true});
    const [image, setImage] = useState({value: '', valid: true});
    const [category, setCategory] = useState({value: ' ', valid: true});
    const [description, setDescription] = useState({value: '', valid: true});
    const [id, setId] = useState({value: '', valid: true});
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({title, video, image, category, description, id});
    };

    const handleChange = (event, setValue) => {
        const value = event.target.value;
        const valid = true;
        setValue({value, valid});
    };

    const handleReset = () => {
        setTitle({value: '', valid: true});
        setVideo({value: '', valid: true});
        setImage({value: '', valid: true});
        setCategory({value: ' ', valid: true});
        setDescription({value: '', valid: true});
        setId({value: '', valid: true});
    };

    return (
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <TitleBig marginbottom='4rem'>Nuevo video</TitleBig>
            <TextField
                label={'Título'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={title.value}
                onChange={(e) => handleChange(e, setTitle)}
            />
            <TextField
                label={'Link del video'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={video.value}
                onChange={(e) => handleChange(e, setVideo)}
            />
            <TextField
                label={'Link de imagen del video'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={image.value}
                onChange={(e) => handleChange(e, setImage)}
            />
            <FormControl variant="filled" fullWidth sx={{...styleProps}}>
                <InputLabel id="label" sx={{color: `${colorGrayDark}`}}>Categoria</InputLabel>
                <Select
                    labelId="label"
                    id="demo-simple-select-filled"
                    native
                    sx={{color: `${colorGrayDark}`}}
                    value={category.value}
                    onChange={(e) => handleChange(e, setCategory)}
                >
                    <option value=' ' disabled defaultValue=' ' hidden >Seleccionar categoria</option>
                    <option style={{background: `${colorGrayMedium}`}} value={'Front End'}>Front End</option>
                    <option style={{background: `${colorGrayMedium}`}} value={'Back End'}>Back End</option>
                    <option style={{background: `${colorGrayMedium}`}} value={'Soft Skills'}>Soft Skills</option>
                </Select>
            </FormControl>
            <TextField
                label={'Descripción'}
                multiline minRows={4}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={description.value}
                onChange={(e) => handleChange(e, setDescription)}
            />
            <TextField
                label={'Código de seguridad'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={id.value}
                onChange={(e) => handleChange(e, setId)}
            />
            
            <div className="flex-buttons">
                <div>
                    <Btn
                        type="submit"
                        background={colorPrimary}
                        color={'white'}
                    >
                        Guardar
                    </Btn>
                    <Btn
                        type="button"
                        background={colorBlackLighter}
                        color={colorBlackDark}
                        onClick={() => handleReset()}
                    >
                        Limpiar
                    </Btn>
                </div>
                <Link to={'/add-category'}>
                    <Btn type="button" background={colorPrimary} color={'white'}>Nueva Categoria</Btn>
                </Link>
            </div>
        </StyledForm>
    );
}

export default VideoForm;