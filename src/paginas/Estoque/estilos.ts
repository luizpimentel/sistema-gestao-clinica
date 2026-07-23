import styled from "styled-components";


export const Container = styled.div`
    position: relative;
    background-color: var(--cor-quaternaria);
    margin-top: 0px;
    padding: 0px;
    border-radius: 0 0 10px 10px;
`;

export const Titulo = styled.h1`
    margin-top: 0px;
    padding: 10px 30px;
    background-color: var(--cor-secundaria);
    font-family: var(--font-principal);
    color: #FFF;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
`;

export const ConteinerBusca = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
    padding:0;
    max-height: 51.8px;
`;

export const InputBusca = styled.input`
    width: 100%;
    height: 51.2px;
    text-align: center;
    padding: 13px;
    font-family: var(--font-principal);
    font-size: 14px;
    color: #534a4a;
    background-color: var(--cor-quaternaria);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    border: 3px transparent solid;
    border-bottom: 3px solid var(--cor-secundaria);
    cursor: pointer;
    text-transform: uppercase;
    
    
    &:hover {
        border-color: var(--cor-principal); 
        border-width: 3px;   
        color: #333;
    }

    &:focus {
        outline: none;
        border-color: var(--cor-principal);
        color: #534a4a;
    }
    
    &::placeholder {
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
`;

export const CaixaBotaoAcoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-secundaria);

    & button {
        background-color: var(--cor-secundaria);
        border: none;
        cursor: pointer;
        color: var(--cor-marrom-acinzentado);
        font-size: 42px;
        transition: color 0.3s ease;
        padding: 0 20px;


        &:hover {
            color: var(--cor-quaternaria);
            background-color: var(--cor-secundaria);
        }
    }
`;

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
`;



export const ContainerListas = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ItemListas = styled.li`
    display: grid;  

    /* 2. DEFINE O TAMANHO DAS COLUNAS: 
        - 3fr (3 frações): O Nome ganha o maior espaço
        - 1fr (1 fração): A Quantidade ganha um espaço menor
        - 2fr (2 frações): O Laboratório fica com um espaço médio
        - auto: A caixa dos botões pega só o espaço necessário para os ícones
    */
    grid-template-columns: 3fr 1fr 2fr 0.5fr;
    
    align-items: center;
    gap: 20px;
    margin: 10px 0;
    padding: 15px 20px;
    border-radius: 5px;
    border-bottom: 1px solid var(--cor-marrom-acinzentado);
    font-family: 'Trebuchet MS', sans-serif;
    text-transform: uppercase;
    color: black;

    .nome-item {
        padding-left: 10px;
    }

    .quantidade-item {
        font-weight: bold;
        text-align: left;
    }

    .laboratorio-item {
        font-style: italic;
        text-align: center;
    }
`;

export const CaixaBotoes = styled.div`
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