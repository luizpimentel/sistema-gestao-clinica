import { useState, type FormEvent } from "react";
import * as S from "./estilos.ts";
import { useAuth } from "@/context/AuthProvider/useAuth.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (!usuario || !senha) {
            alert("Digite o usuário e senha!");
            return;
        }

        try {
            await auth.autenticacao(usuario, senha);
            navigate('/');
        } catch {
            alert('Usuário e/ou senha inválidos');
        }
    }

    return (

        <S.ContainerPrincipal>
            
            

            <S.ContainerTela>
                <S.Logo></S.Logo>

                <S.FormLogin onSubmit={logar}>
                    <S.InputForm placeholder="Digite seu usuário..." value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                    <S.InputForm placeholder="Digite sua senha..." type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <S.BotaoEsqueciSenha>Esqueci minha senha</S.BotaoEsqueciSenha>

                    <S.BotaoEntrar type="submit">Entrar</S.BotaoEntrar>
                </S.FormLogin>

                <S.CopyRight>
                    © {new Date().getFullYear()}. Todos os direitos reservados.
                </S.CopyRight>

            </S.ContainerTela>



        </S.ContainerPrincipal>

    )
}

export default Login;
