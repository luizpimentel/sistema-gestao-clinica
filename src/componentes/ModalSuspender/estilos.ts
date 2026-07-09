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
    background-color: #f9f9f9;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    min-width: 1200px;
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

export const ContainerModalSuspender = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

// Estilos para container de justificativa
export const ContainerJustificativa = styled.div`
    flex: 1;
    max-width: 720px;
`;

export const TituloContainerJustificativa = styled.h3`
    font-family: var(--font-terciaria);
    color: var(--cor-principal);
    font-size: 24px;
    margin-bottom: 10px;
`;

export const DescricaoContainerJustificativa = styled.li`
    font-family: var(--font-terciaria);
    color: var(--cor-principal);
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Data = styled.p`
    font-family: var(--font-secundaria);
    color: var(--cor-principal);
    font-size: 14px;
    margin-bottom: 10px;
`;

export const TextareaJustificativa = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    font-family: var(--font-secundaria);

    &:focus {
        outline: none;
        border-color: var(--cor-principal);
    }   
`;

// Estilos para container de listas
export const ContainerTransferencia = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    width: 35%;
`;

export const ColunaLista = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
`;

export const BuscaLista = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-family: var(--font-terciaria);

    &:focus {
        outline: none;
        border-color: var(--cor-principal);
    }
`;

export const TituloLista = styled.h4`
    text-align: center;
    color: var(--cor-principal);
    font-family: var(--font-principal);
    text-transform: uppercase;
    margin-bottom: 2px;
    margin-top: 2px;
`;

export const ListaBox = styled.div`
    border: 2px solid var(--cor-principal);
    border-radius: 8px;
    height: 200px;
    overflow-y: auto;
    background-color: #f9f9f9;
`;

export const ContainerSetas = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const BotaoSeta = styled.button`
    background-color: var(--cor-principal);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
    transition: 0.2s;

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        background-color: var(--cor-terciaria);
    }
`;

// Estilo para cada item da lista, com destaque se selecionado
export const ItemLista = styled.div<{ $selecionado?: boolean }>`
    font-family: var(--font-terciaria);
    padding: 10px;
    border-bottom: 2px solid var(--cor-principal);
    cursor: pointer;
    background-color: ${props => props.$selecionado ? 'var(--cor-principal)' : 'white'}; // Muda a cor se selecionado
    border-color: ${props => props.$selecionado ? 'var(--cor-principal)' : 'var(--cor-principal)'}; // Muda a cor da borda se selecionado
    color: ${props => props.$selecionado ? 'white' : 'black'}; // Muda a cor do texto se selecionado
    transition: background-color 0.2s;

    &:hover {
        background-color: ${props => props.$selecionado ? 'var(--cor-principal)' : 'var(--cor-terciaria)'}; // Muda a cor ao passar o mouse, mantendo a cor se já estiver selecionado
    }
`;

// Estilo para o botão de salvar
export const ContainerBotoes = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 20px;
`;

export const BotaoSalvar = styled.button`
    background-color: var(--cor-principal);
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: var(--font-principal);
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: var(--cor-secundaria);
    }
`;  