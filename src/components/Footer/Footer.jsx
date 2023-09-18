import styled from "styled-components";
import { Logo } from "../UI";
import logo from '../../assets/img/logo.png';
import { colorBlackDark, colorPrimary } from "../UI/variables";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    /* background-color: ${colorBlackDark}; */
    padding-top: .75rem;
    padding-bottom: 2.25rem;
    margin-top: 6rem;
    border-top: 2px solid ${colorPrimary};
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Logo src={logo} width='17rem' />
        </StyledFooter>
    );
}

export default Footer;