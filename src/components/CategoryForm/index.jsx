import { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { colorBlackDark, colorBlackLighter, colorGrayDark, colorGrayMedium, colorPrimary } from "../UI/variables";
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

const styleProps = {
    backgroundColor: `${colorGrayMedium}`,
    marginBottom: '4rem',
    borderRadius: '4px',
}

const CategoryForm = () => {
    const [name, setName] = useState({value: '', valid: true});
    const [description, setDescription] = useState({value: '', valid: true});
    const [color, setColor] = useState({value: '#000000', valid: true});
    const [id, setId] = useState({value: '', valid: true});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, description, color, id});
    };

    const handleChange = (event, setValue) => {
        const value = event.target.value;
        const valid = true;
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
            />
            <TextField
                type="color"
                label={'Color'}
                fullWidth
                variant="filled"
                sx={{...styleProps}}
                value={color.value}
                onChange={(e) => handleChange(e, setColor)}
            />
            <TextField
                label={'Codigo de seguridad'}
                multiline
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
            </div>
        </StyledForm>
    );
}

export default CategoryForm;