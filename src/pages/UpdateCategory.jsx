import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useParams, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { updateCategoryAxios } from "../api/api";
import { nameValidation, descriptionValidation, colorValidation } from "../validations/categoryForm";
import { StyledForm } from "../components/CategoryForm";
import { TitleBig, Btn } from "../components/UI";
import { styleProps, colorPrimary, colorBlackLighter, colorBlackDark } from "../components/UI/variables";

const UpdateCategory = () => {
    const [name, setName] = useState({value: '', valid: true});
    const [description, setDescription] = useState({value: '', valid: true});
    const [color, setColor] = useState({value: '', valid: true});
    const [code, setCode] = useState({value: '', valid: true});

    const {categories} = useContext(DataContext);
    const {id} = useParams();
    const navigate = useNavigate();

    const colors = categories.map((cat) => cat.color);

    useEffect(() => {
        const categoryFound = categories.find((cat) => cat.id === id);
        if(typeof categoryFound !== 'undefined') {
            console.log('encontrado!');
            setName({value: categoryFound.name, valid: true});
            setDescription({value: categoryFound.description, valid: true});
            setColor({value: categoryFound.color, valid: true});
            setCode({value: categoryFound.id, valid: true});
        }else {
            navigate('/not-found');
        }
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        const validChecker = name.valid && description.valid && color.valid;
        if(validChecker) {
            updateCategoryAxios(id, {name: name.value, description: description.value, color: color.value})
                .then( () => {
                    navigate('/add-category');
                } );
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
    };

    return (
        <main>
            <StyledForm onSubmit={(e) => onSubmit(e)}>
                <TitleBig marginbottom='4rem'>Editar Categoria</TitleBig>
                <TextField
                    label='Nombre'
                    variant="filled"
                    fullWidth
                    sx={{...styleProps}}
                    value={name.value}
                    onChange={(e) => handleChange(e, setName)}
                    onBlur={(e) => handleBlur(e, setName, nameValidation)}
                    error={!name.valid}
                    helperText={!name.valid && 'Nombre invalido. Introduzca al menos 3 caracteres'}
                    />
                <TextField
                    label='Descripcion'
                    multiline
                    minRows={4}
                    variant="filled"
                    fullWidth
                    sx={{...styleProps}}
                    value={description.value}
                    onChange={(e) => handleChange(e, setDescription)}
                    onBlur={(e) => handleBlur(e, setDescription, descriptionValidation)}
                    error={!description.valid}
                    helperText={!description.valid && 'Descripcion invalida. Introduzca entre 10 y 100 caracteres'}
                    />
                <TextField
                    type="color"
                    label='color'
                    variant="filled"
                    fullWidth
                    sx={{...styleProps}}
                    value={color.value}
                    onChange={(e) => handleChange(e, setColor)}
                    onBlur={(e) => handleBlur(e, setColor, colorValidation, colors)}
                    error={!color.valid}
                    helperText={!color.valid && 'Color invalido. Ya existe una categoria con este color'}
                />
                <TextField
                    label='Codigo de seguridad'
                    variant="filled"
                    fullWidth
                    disabled
                    sx={{...styleProps}}
                    value={code.value}
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
        </main>
    );
};

export default UpdateCategory;