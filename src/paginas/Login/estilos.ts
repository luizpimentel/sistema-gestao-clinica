import styled from 'styled-components';
import logo from '../../recursos/logo.png'

export const ContainerPrincipal = styled.div`
    margin:0 auto;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-secundaria);
    z-index: 999;
    position: fixed;
`;

export const ContainerTela = styled.div`
    min-width: 450px;
    min-height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0px 0px 20px 4px rgba(0,0,0,0.19);
`;

export const Logo = styled.div`
    width: 150px;
    background-image: url(${logo});
    background-size: cover;
    background-positon: center;
    height: 150px;
    
`;

export const FormLogin = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
`;

export const InputUsuario = styled.input`
    width: 100%;
    font-size: 18px;
    font-family: var(--font-terciaria);
    background: transparent;
    border: 2px solid transparent;
    border-bottom: 1px solid #000;

    transition: 0.2s ease;

    &:focus {
        outline: none;
        border-bottom: 3px solid var(--cor-terciaria);
        
    }
`;

export const InputSenha = styled.input`
    width: 100%;
    font-size: 18px;
    font-family: var(--font-terciaria);
    background: transparent;
    border: 2px solid transparent;
    border-bottom: 1px solid #000;

    transition: 0.2s ease;

    &:focus {
        outline: none;
        border-bottom: 3px solid var(--cor-terciaria);
    }
`;

export const BotaoEsqueciSenha = styled.button`
    width: 50%;
    padding: 5px;
    background-color: var(--cor-terciaria);
    font-family: var(--font-terciaria);
    font-size: 12px;
    cursor: pointer;
    border: 2px solid var(--cor-quaternaria);
    color: #000;
    transition: 0.3s ease;

    &:hover {
        color: white;
        border: 2px solid var(--cor-principal);
        background-color: var(--cor-principal);
    }
`

export const BotaoEntrar = styled.button`
    width: 100%;
    padding: 10px;
    background-color: var(--cor-terciaria);
    font-family: var(--font-terciaria);
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    border: 2px solid var(--cor-quaternaria);
    color: #000;

    transition: 0.3s ease;


    &:hover {
        color: white;
        border: 2px solid var(--cor-principal);
        background-color: var(--cor-principal);
    }
`;

export const CopyRight = styled.div`
    position: absolute;
    bottom: 10px;
    font-size: 14px;
    font-family: var(--font-terciaria);
    color: #000;
`;