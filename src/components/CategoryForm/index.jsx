import { useState, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { colorBlackDark, colorBlackLighter, colorGrayDark, colorGrayMedium, colorPrimary } from "../UI/variables";
import { TitleBig, Btn } from "../UI";
import { addCategoryAxios } from "../../api/api";
import { nameValidation, descriptionValidation, colorValidation, idValidation } from "../../validations/categoryForm";

export const StyledForm = styled.form`
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

export const styleProps = {
    backgroundColor: `${colorGrayMedium}`,
    marginBottom: '4rem',
    borderRadius: '4px',
}

const CategoryForm = () => {
    const [name, setName] = useState({value: '', valid: true});
    const [description, setDescription] = useState({value: '', valid: true});
    const [color, setColor] = useState({value: '#000000', valid: true});
    const [id, setId] = useState({value: '', valid: true});
    
    const { categories } = useContext(DataContext);

    const categoryColors = categories.map((cat) => cat.color);
    const categoryIds = categories.map((cat) => cat.id);

    const defaultColorIsValid = () => {
        const defaultColorValue = color.value;
        const defaultColorValid = colorValidation(defaultColorValue, categoryColors);
        setColor({value: defaultColorValue, valid: defaultColorValid});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        defaultColorIsValid();
        const valuesChecker = name.value.length > 0 && description.value.length > 0 && id.value.length > 0;
        const validChecker = name.valid && description.valid && color.valid && id.valid;

        if( valuesChecker && validChecker ){
            addCategoryAxios({name: name.value, description: description.value, color: color.value, id: id.value});
            
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
    };

    const handleReset = () => {
        setName({value: '', valid: true});
        setDescription({value: '', valid: true});
        setColor({value: '#000000', valid: true});
        setId({value: '', valid: true});
    };

    return (
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <TitleBig marginbottom='4rem'>Nueva Categoria</TitleBig>
            <TextField
                label={'Nombre'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={name.value}
                onChange={(e) => handleChange(e, setName)}
                onBlur={(e) => handleBlur(e, setName, nameValidation)}
                error={!name.valid}
                helperText={!name.valid && 'Nombre invalido. Introduzca al menos 3 caracteres'}
            />
            <TextField
                label={'Descripcion'}
                multiline
                minRows={4}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={description.value}
                onChange={(e) => handleChange(e, setDescription)}
                onBlur={(e) => handleBlur(e, setDescription, descriptionValidation)}
                error={!description.valid}
                helperText={!description.valid && 'Descripcion invalida. Introduzca entre 10 y 100 caracteres'}
            />
            <TextField
                type="color"
                label={'Color'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={color.value}
                onChange={(e) => handleChange(e, setColor)}
                onBlur={(e) => handleBlur(e, setColor, colorValidation, categoryColors)}
                error={!color.valid}
                helperText={!color.valid && 'Color invalido. Ya existe una categoria con este color'}
            />
            <TextField
                label={'Codigo de seguridad'}
                multiline
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={id.value}
                onChange={(e) => handleChange(e, setId)}
                onBlur={(e) => handleBlur(e, setId, idValidation, categoryIds)}
                error={!id.valid}
                helperText={!id.valid && 'Codigo invalido. Ya existe una categoria con este codigo o no cumple con al menos 5 caracteres'}
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
            </div>
        </StyledForm>
    );
}

export default CategoryForm;