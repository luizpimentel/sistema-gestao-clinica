import styled from 'styled-components';
import logo from '@/recursos/logo.png'

export const ContainerPrincipal = styled.div`
    margin:0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-fundo);
    z-index: 999;
    position: fixed;
`;

export const ContainerTela = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.19);
    background-color: var(--cor-secundaria);
`;

export const Logo = styled.div`
    margin-top: -75px;
    margin-bottom: 10px;
    width: 100px;
    background-image: url(${logo});
    background-size: cover;
    background-positon: center;
    height: 100px;
    box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.19);
    border-radius: 50%;
    transition: 0.5s ease;

    &:hover{
        box-shadow: 0px 0px 10px 4px var(--cor-quaternaria);
    }
`;

export const FormLogin = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    width: 90%;
    margin-top: auto;
`;

export const InputForm = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    font-family: var(--font-terciaria);
    background: var(--cor-terciaria);
    border: 1px solid var(--cor-fundo);
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.2);

    transition: 0.2s ease;

    &:focus {
        outline: none;   
        border: 1px solid var(--cor-terciaria);
        box-shadow: 0px 0px 10px 1px var(--cor-quaternaria);
     
    }
`;

export const BotaoEsqueciSenha = styled.button`
    padding: 5px;
    background-color: transparent;
    font-family: var(--font-terciaria);
    font-size: 12px;
    cursor: pointer;
    border: none;
    color: var(--cor-texto);
    transition: 0.2s ease;

    &:hover {
        color: var(--cor-quaternaria);
);
    }
`

export const BotaoEntrar = styled.button`
    width: 100%;
    padding: 10px;
    background-color: var(--cor-quaternaria);
    font-family: var(--font-terciaria);
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 4px rgba(0,0,0,0.2);
    color: var(--cor-terciaria);

    transition: 0.3s ease;

    &:hover {
        background-color: var(--cor-hover-botao);
    }
`;

export const CopyRight = styled.div`
    margin-top: auto;
    font-size: clamp(0.5rem, 2.5vw, 0.7rem);;
    font-family: var(--font-terciaria);
    color: #000;
`;