import styled from "styled-components";
import { Link } from "react-router-dom";
import { colorBlackDark, colorPrimary } from "../UI/variables";
import logo from '../../assets/img/logo.png';
import { LogoHeader } from "../UI";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    /* background-color: ${colorBlackDark}; */
    background-color: #090910;
    width: 100%;
    height: 5.875rem;
    border-bottom: 2px solid ${colorPrimary};

    @media (max-width: 767px) {
        justify-content: center;
        height: 4.5rem;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <Link to={'/'}>
                <LogoHeader src={logo}/>
            </Link>
        </StyledHeader>
    );
}

export default Header;