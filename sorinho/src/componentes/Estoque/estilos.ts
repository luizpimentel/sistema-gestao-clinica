import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    background-color: #FBF5DD;
    margin-top: 0px;
    padding: 0px;
    border-radius: 0 0 10px 10px;
`;

export const Titulo = styled.h1`
    margin-top: 0px;
    padding: 10px 20px;
    background-color: #F2C94C;
    font-family: var(--font-principal);
    color: #FFF;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const ConteinerBusca = styled.div`
    margin: 0;
    padding:0;
`;

export const InputBusca = styled.input`
    width: 100%;
    text-align: center;
    padding: 13px;
    font-family: var(--font-principal);
    font-size: 14px;
    color: #534a4a;
    border: 1px solid #ccc;
    background-color: #EFE3CA;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border: 3px transparent solid;
    cursor: pointer;
    text-transform: uppercase;
    
    &:hover {
        border-color: #999; 
        border-width: 3px;   
        color: #333;
    }

    &:focus {
        outline: none;
        border-color: #534a4a;
        color: #534a4a;
    }
    
    &::placeholder {
        color: #534a4a
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
`;

export const ContainerListas = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ItemListas = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    background-color: #FFF4E1;
    font-family: 'Trebuchet MS', sans-serif;
    text-transform: uppercase;
    color: #534a4a;
`;

export const CaixaInfo = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-around;
        
    strong {
        width: 30%;    
        font-size: 18px;
        text-align: left;
    }
`;

export const CaixaBotoes = styled.div`
    width: 15%;
    display: flex;
    gap: 20px;
`;

export const BotaoLista = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #534a4a;
    font-size: 24px;

    transition: color 0.3s ease;

    &:hover {
        color: var(--cor-principal);
    }
`;