import { Link } from "react-router-dom";
import styled from "styled-components";

export const Menu = styled.nav`
    position: relative;
    background-color: var(--cor-marrom-acinzentado);
    padding: 10px;
    display: flex;
    justify-content: space-around;
`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    font-family: "Dela Gothic One", sans-serif;
    text-transform: uppercase;
    color: #fff;
    
    &:hover {
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    }
`;
