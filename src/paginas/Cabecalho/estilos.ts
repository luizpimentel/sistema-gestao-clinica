import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--cor-marrom-acinzentado);
    padding: 20px;
    color: white;
    text-align: center;

    h1 {
        margin: 0;
        font-size: 3rem;
        color: #fff;
        font-family: var(--font-principal);
        text-transform: uppercase;
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.3);
    }
        
    span {
        margin-right: 10px;
        color: #fff;
    }
`;