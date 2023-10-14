import styled from "styled-components";
import { LogoFooter } from "../UI";
import logo from '../../assets/img/logo.webp';
import { colorBlackDark, colorPrimary } from "../UI/variables";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: .75rem;
    padding-bottom: 2.25rem;
    margin-top: 6rem;
    border-top: 2px solid ${colorPrimary};
`;

const Footer = () => {
    return (
        <StyledFooter>
            <LogoFooter src={logo}/>
        </StyledFooter>
    );
}

export default Footer;