import { useState, type FormEvent } from "react";
import * as S from "./estilos.ts";
import { useAuth } from "../../context/AuthProvider/useAuth.tsx";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (!email || !senha) {
            alert("Digite o e-mail e senha!");
            return;
        }

        try {
            await auth.autenticacao(email, senha);
            navigate('/');
        } catch {
            alert('E-mail ou senha inválidos');
        }
    }


    return (

        <S.ContainerPrincipal>

            <S.ContainerTela>
                <S.Logo></S.Logo>

                <S.FormLogin onSubmit={logar}>
                    <S.InputUsuario placeholder="Digite seu e-mail..." value={email} onChange={(e) => setEmail(e.target.value)} />

                    <S.InputSenha placeholder="Digite sua senha..." type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <S.BotaoEsqueciSenha>Esqueci minha senha</S.BotaoEsqueciSenha>

                    <S.BotaoEntrar type="submit">Entrar</S.BotaoEntrar>
                </S.FormLogin>

            </S.ContainerTela>

            <S.CopyRight>
                © Todos os direitos reservados. {new Date().getFullYear()}.
            </S.CopyRight>

        </S.ContainerPrincipal>

    )
}

export default Login;
