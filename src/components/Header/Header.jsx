import styled from "styled-components";
import { colorBlackDark, colorPrimary } from "../UI/variables";
import logo from '../../assets/img/logo.png';
import { Logo } from "../UI";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    /* background-color: ${colorBlackDark}; */
    background-color: #000;
    width: 100%;
    height: 5.75rem;
    border-bottom: 2px solid ${colorPrimary};
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo src={logo} marginleft='2.5rem' width='12rem' />
        </StyledHeader>
    );
}

export default Header;