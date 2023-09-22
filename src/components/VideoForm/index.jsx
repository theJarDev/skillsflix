import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from "@mui/material/FormHelperText";
import { addVideoAxios } from "../../api/api";
import { titleValidation, videoValidation, imageValidation, categoryValidation, descriptionValidation, idValidation } from "../../validations/videoForm";
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

    const {categories, videos} = useContext(DataContext);
    // const categoryNames = categories.map( (cat) => cat.name );
    const videoIds = videos.map( (video) => video.id );
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const valuesChecker = title.value.length > 0 && video.value.length > 0 && image.value.length > 0 && category.value.length >= 3 && description.value.length > 0 && id.value.length > 0;
        const validChecker = title.valid && video.valid && image.valid && category.valid && description.valid && id.valid;
        if(valuesChecker && validChecker) {
            addVideoAxios({title: title.value, video: video.value, image: image.value, category: category.value, description: description.value, id: id.value});
        }else {
            alert('Todos los campos son requeridos. Ingrese los valores correctamente');
        }
    };

    const handleChange = (event, setValue) => {
        const value = event.target.value;
        const valid = true;
        setValue({value, valid});
    };

    const handleBlur = (event, setValue, validator, data) => {
        const value = event.target.value;
        const valid = validator(value, data);
        setValue({value, valid});
    }

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
                onBlur={(e) => handleBlur(e, setTitle, titleValidation)}
                error={!title.valid}
                helperText={!title.valid && 'Ingrese entre 5 y 50 caracteres'}
            />
            <TextField
                label={'Link del video'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={video.value}
                onChange={(e) => handleChange(e, setVideo)}
                onBlur={(e) => handleBlur(e, setVideo, videoValidation)}
                error={!video.valid}
                helperText={!video.valid && 'Ingrese un link de youtube valido. Ejemplo: https://www.youtube.com/watch?v=li7FzDHYZpc'}
            />
            <TextField
                label={'Link de imagen del video'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={image.value}
                onChange={(e) => handleChange(e, setImage)}
                onBlur={(e) => handleBlur(e, setImage, imageValidation)}
                error={!image.valid}
                helperText={!image.valid && 'Ingrese un link de imagen seguro. Ejemplo: https://....'}
            />
            <FormControl variant="filled" fullWidth sx={{...styleProps}} error={!category.valid}>
                <InputLabel id="label" >Categoria</InputLabel>
                <Select
                    labelId="label"
                    id="demo-simple-select-filled"
                    native
                    // sx={{color: `${colorGrayDark}`}}
                    value={category.value}
                    onChange={(e) => handleChange(e, setCategory)}
                    onBlur={(e) => handleBlur(e, setCategory, categoryValidation)}
                >
                    <option value=' ' disabled defaultValue=' ' hidden >Seleccionar categoria</option>
                    {categories.map( (cat, i) => <option style={{background: `${colorGrayMedium}`}} key={i} value={cat.name}>{cat.name}</option> )}
                    {/* <option style={{background: `${colorGrayMedium}`}} value={'Front End'}>Front End</option>
                    <option style={{background: `${colorGrayMedium}`}} value={'Back End'}>Back End</option>
                    <option style={{background: `${colorGrayMedium}`}} value={'Soft Skills'}>Soft Skills</option> */}
                </Select>
                {!category.valid && <FormHelperText>Seleccione una categoria</FormHelperText>}
            </FormControl>
            <TextField
                label={'Descripción'}
                multiline minRows={4}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={description.value}
                onChange={(e) => handleChange(e, setDescription)}
                onBlur={(e) => handleBlur(e, setDescription, descriptionValidation)}
                error={!description.valid}
                helperText={!description.valid && 'Ingrese entre 10 y 100 caracteres'}
            />
            <TextField
                label={'Código de seguridad'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={id.value}
                onChange={(e) => handleChange(e, setId)}
                onBlur={(e) => handleBlur(e, setId, idValidation, videoIds)}
                error={!id.valid}
                helperText={!id.valid && 'Codigo invalido. Ya existe un video con este codigo o no cumple con al menos 5 caracteres'}
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