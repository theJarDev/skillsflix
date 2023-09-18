import styled from "styled-components";
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

    return (
        <StyledForm>
            <TitleBig marginbottom='4rem'>Nuevo video</TitleBig>
            <TextField label={'Título'} fullWidth variant="filled" sx={{...styleProps}}/>
            <TextField label={'Link del video'} fullWidth variant="filled" sx={{...styleProps}}/>
            <TextField label={'Link de imagen del video'} fullWidth variant="filled" sx={{...styleProps}}/>
            <FormControl variant="filled" fullWidth sx={{...styleProps}}>
                <InputLabel id="label" sx={{color: `${colorGrayDark}`}}>Categoria</InputLabel>
                <Select
                    labelId="label"
                    id="demo-simple-select-filled"
                    native
                    sx={{color: `${colorGrayDark}`}}
                >
                    <option style={{background: `${colorGrayMedium}`}} value={10}>Ten</option>
                    <option style={{background: `${colorGrayMedium}`}} value={20}>Twenty</option>
                    <option style={{background: `${colorGrayMedium}`}} value={30}>Thirty</option>
                </Select>
            </FormControl>
            <TextField label={'Descripción'} multiline minRows={4} fullWidth variant="filled" sx={{...styleProps}}/>
            <TextField label={'Código de seguridad'} fullWidth variant="filled" sx={{...styleProps}}/>
            
            <div className="flex-buttons">
                <div>
                    <Btn background={colorPrimary} color={'white'}>Guardar</Btn>
                    <Btn background={colorBlackLighter} color={colorBlackDark}>Limpiar</Btn>
                    {/* <Button sx={{fontWeight: '600'}} variant="contained">Guardar</Button>
                    <Button sx={{fontWeight: '600', backgroundColor: `${colorBlackLighter}`, color: `${colorBlackDark}`}} variant="contained">Limpiar</Button> */}
                </div>
                <Btn background={colorPrimary} color={'white'}>Nueva Categoria</Btn>
                    {/* <Button sx={{fontWeight: '600'}} variant="contained">Nueva categoria</Button> */}
            </div>
        </StyledForm>
    );
}

export default VideoForm;