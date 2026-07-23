import styled from "styled-components";
import type { FundoProps } from "../../interfaces/interfaces";

export const Fundo = styled.div<FundoProps>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    /* Animação de fade-in */
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

export const ContainerModal = styled.div<FundoProps>`
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    min-width: 400px;
    min-height: 250px;
    position: relative;

    /* Animação de slide-in */
    transform: ${(props) => (props.$isOpen ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(-20px)')};
    transition: transform 0.3s ease;
`;

export const BotaoFechar = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #333;

    &:hover{
        color: red;
    }
`;

export const TituloModal = styled.h2`
    font-family: var(--font-principal);
    color: var(--cor-principal);
    font-size: 32px;
    border-bottom: 3px solid var(--cor-principal);
    margin-bottom: 10px;
    text-transform: uppercase;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const CampoContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
    font-family: var(--font-principal);

    label {
        width: 150px;
        font-size: 16px;
        text-transform: uppercase;
    }

    input, select {
        flex: 1;
    }

    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 16px;
        transition: border-color 0.3s ease;

        &:focus {
            outline: none;
            border-color: var(--cor-principal);
        }
    }
    
    select {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 16px;
        transition: border-color 0.3s ease;
        font-family: var(--font-principal);

        &:focus {
            outline: none;
            border-color: var(--cor-principal);
        }
        
        &:hover {
            border-color: var(--cor-principal);
        }

        option {
            font-size: 16px;
        }
    }

    button {
        width: 100%;
        padding: 10px 20px;
        background-color: var(--cor-principal);
        color: #fff;
        border: none;
        cursor: pointer;
        font-family: var(--font-principal);
        font-size: 16px;
        text-transform: uppercase;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #2616b1;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }
`;
