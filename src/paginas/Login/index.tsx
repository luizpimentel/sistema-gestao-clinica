import { useState, type FormEvent } from "react";
import * as S from "./estilos.ts";
import { useAuth } from "@/context/AuthProvider/useAuth.tsx";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const [carregando, setCarregando] = useState(false);
    const [recuperarSenha, setRecuperarSenha] = useState(false);

    const logar = async (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (!usuario || !senha) {
            alert("Digite o usuário e a senha!");
            return;
        }

        setCarregando(true);

        try {
            await auth.autenticacao(usuario, senha);
            navigate('/');
        } catch {
            alert('Usuário e/ou senha inválidos');
        } finally {
            setCarregando(false);
        }
    }

    const redefinirSenha = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault();

        if (!usuario) {
            alert("Informe o seu usuário!")
            return;
        }

        alert(`Instruções enviadas para o e-mail associado a: ${usuario}`)

        setRecuperarSenha(false);
    }

    return (

        <S.ContainerPrincipal>



            <S.ContainerTela>
                <S.Logo></S.Logo>

                {!recuperarSenha ? (

                    < S.FormLogin onSubmit={logar}>
                        <S.InputForm placeholder="Nome de usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                        <S.InputForm placeholder="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                        <S.BotaoEsqueciSenha onClick={() => setRecuperarSenha(true)}>Esqueci minha senha</S.BotaoEsqueciSenha>

                        <S.BotaoEntrar type="submit" disabled={carregando}>{carregando ? 'Acessando...' : 'Entrar'}</S.BotaoEntrar>
                    </S.FormLogin>

                ) : (

                    <S.FormRecuperarSenha onSubmit={redefinirSenha}>
                        <S.BotaoVoltar type="button" onClick={() => setRecuperarSenha(false)}> <IoIosArrowBack /> </S.BotaoVoltar>

                        <S.InputForm placeholder="Nome de usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                        
                        <S.BotaoEntrar type="submit">Redefinir senha</S.BotaoEntrar>
                    </S.FormRecuperarSenha>

                )}

                <S.CopyRight>
                    © {new Date().getFullYear()}. Todos os direitos reservados.
                </S.CopyRight>

            </S.ContainerTela>



        </S.ContainerPrincipal >

    )
}

export default Login;
