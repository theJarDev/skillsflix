import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

    return (
        <StyledForm>
            <TitleBig marginbottom='4rem'>Nueva Categoria</TitleBig>
            <TextField label={'Nombre'} fullWidth variant="filled" sx={{...styleProps}} />
            <TextField label={'Descripcion'} multiline minRows={4} fullWidth variant="filled" sx={{...styleProps}}/>
            <TextField type="color"  label={'Color'} fullWidth variant="filled" sx={{...styleProps}}/>
            <TextField label={'Codigo de seguridad'} multiline fullWidth variant="filled" sx={{...styleProps}}/>
            
            <div className="flex-buttons">
                <div>
                    <Btn background={colorPrimary} color={'white'}>Guardar</Btn>
                    <Btn background={colorBlackLighter} color={colorBlackDark}>Limpiar</Btn>
                    {/* <Button sx={{fontWeight: '600'}} variant="contained">Guardar</Button>
                    <Button sx={{fontWeight: '600', backgroundColor: `${colorBlackLighter}`, color: `${colorBlackDark}`}} variant="contained">Limpiar</Button> */}
                </div>
                    {/* <Button sx={{fontWeight: '600'}} variant="contained">Nueva categoria</Button> */}
            </div>
        </StyledForm>
    );
}

export default CategoryForm;