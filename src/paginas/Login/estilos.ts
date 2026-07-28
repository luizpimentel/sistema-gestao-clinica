import styled, { keyframes } from 'styled-components';
import logo from '@/recursos/logo.png'

// --- ANIMAÇÕES ---
// Esta animação cria o efeito suave da transição "virar página"
const animacaoSurgir = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

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
    min-height: 300px;
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
    background-position: center; /* Corrigido de background-positon */
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
    animation: ${animacaoSurgir} 0.8s ease-out forwards;
`;

export const FormRecuperarSenha = styled(FormLogin)`
    margin-top: 0;
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

// Alterado para 'button' para aceitar o onClick sem recarregar a página
export const BotaoEsqueciSenha = styled.button`
    padding: 5px;
    background-color: transparent;
    font-family: var(--font-terciaria);
    font-size: 12px;
    cursor: pointer;
    border: none;
    color: var(--cor-texto); /* Usa a cor padrão do texto (ajuste se necessário) */
    transition: 0.2s ease;

    &:hover {
        color: var(--cor-quaternaria);
    }
`;

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
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export const BotaoVoltar = styled.button`
    align-self: flex-start;
    background: transparent;
    border: none;
    color: var(--cor-texto); /* Ajuste para a variável de texto ou cor escura */
    font-family: var(--font-terciaria);
    font-size: 14px;
    cursor: pointer;
    padding: 0;
    margin-bottom: 5px;
    transition: 0.2s ease;

    &:hover {
        color: var(--cor-quaternaria);
        transform: translateX(-3px); /* Leve efeito de mover para a esquerda ao passar o mouse */
    }
`;

export const CopyRight = styled.div`
    margin-top: auto;
    font-size: clamp(0.5rem, 2.5vw, 0.7rem);
    font-family: var(--font-terciaria);
    color: #000;
`;