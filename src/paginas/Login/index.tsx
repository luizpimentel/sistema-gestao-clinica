import { useState, type FormEvent } from "react";
import * as S from "./estilos.ts";
import { useAuth } from "@/context/AuthProvider/useAuth.tsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    
    const [carregando, setCarregando] = useState(false);

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
        } finally{
            setCarregando(false);
        }
    }

    const trocarSenha = () => {
        
    }

    return (

        <S.ContainerPrincipal>
            
            

            <S.ContainerLog>
                <S.Logo></S.Logo>

                <S.FormLogin onSubmit={logar}>
                    <S.InputForm placeholder="Digite seu usuário..." value={usuario} onChange={(e) => setUsuario(e.target.value)} />

                    <S.InputForm placeholder="Digite sua senha..." type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

                    <S.BotaoEsqueciSenha onClick={trocarSenha}>Esqueci minha senha</S.BotaoEsqueciSenha>

                    <S.BotaoEntrar type="submit" disabled={carregando}>{carregando ? 'Acessando...' : 'Entrar'}</S.BotaoEntrar>
                </S.FormLogin>

                <S.CopyRight>
                    © {new Date().getFullYear()}. Todos os direitos reservados.
                </S.CopyRight>

            </S.ContainerLog>



        </S.ContainerPrincipal>

    )
}

export default Login;
