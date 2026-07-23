import { createContext, useEffect, useState } from "react";
import type { Usuario, IAuthProvider, UContext } from '../../interfaces/interfaces'
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

    async function autenticacao(email: string, senha: string) {
        const credenciaisValidas = validarCredenciais(email, senha);

        if (!credenciaisValidas) {
            throw new Error('Credenciais inválidas');
        }

        const payload: Usuario = {
            email: email.trim(),
            token: gerarTokenSessao(),
        };

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    const value: UContext = {
        email: user?.email,
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
