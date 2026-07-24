import { createContext, useEffect, useState, useCallback } from "react";
import type { Usuario, IAuthProvider, UContext } from '@/interfaces'
import {
    getUserLocalStorage,
    gerarTokenSessao,
    inicializarUsuarios,
    setUserLocalStorage,
    validarCredenciais,
} from "./util";

export const AuthContext = createContext<UContext>({} as UContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<Usuario | null>(() => {
        const usuarioSalvo = getUserLocalStorage();
        return usuarioSalvo ? usuarioSalvo : null;
    });

    useEffect(() => {
        inicializarUsuarios();
    }, [])

    async function autenticacao(usuario: string, senha: string) {
        const credenciaisValidas = validarCredenciais(usuario, senha);

        if (!credenciaisValidas) {
            throw new Error('Credenciais inválidas');
        }

        const payload: Usuario = {
            usuario: usuario.trim(),
            token: gerarTokenSessao(),
        };

        setUser(payload);
        setUserLocalStorage(payload);
    }

    // O useCallback garante que a função de logout não seja recriada a cada renderização
    const logout = useCallback(() => {
        setUser(null);
        setUserLocalStorage(null);
        console.log('Realizando logout...');
    }, []);

    // Lógica de inatividade (10 minutos)
    useEffect(() => {
        // Se não houver usuário logado, não precisa rastrear inatividade
        if (!user) return;

        let timerDeInatividade: ReturnType<typeof setTimeout>;
        
        const resetarTimer = () => {
            clearTimeout(timerDeInatividade);

            // Inicia o timer de 10 minutos (600.000 ms)
            timerDeInatividade = setTimeout(() => {
                console.log("Sessão encerrada por inatividade.");
                logout();
            }, 600000);
        };

        const eventosDeAtividade = [
            'mousemove',
            'mousedown',
            'keydown',
            'scroll',
            'touchstart'
        ];

        // Adiciona os ouvintes de evento
        eventosDeAtividade.forEach((evento) => {
            window.addEventListener(evento, resetarTimer);
        });

        // Inicia o timer pela primeira vez
        resetarTimer();

        // Função de limpeza quando o componente desmontar ou o usuário deslogar
        return () => {
            clearTimeout(timerDeInatividade);
            eventosDeAtividade.forEach((evento) => {
                window.removeEventListener(evento, resetarTimer);
            });
        };
    }, [user, logout]);

    const value: UContext = {
        usuario: user?.usuario,
        token: user?.token,
        autenticacao,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}