import type { Usuario, UsuarioCredenciais } from "@/interfaces";

const CHAVE_USUARIOS = 'usuarios';
const CHAVE_SESSAO = 'u';

const USUARIOS_PADRAO: UsuarioCredenciais[] = [
    { usuario: 'dev', senha: 'dev' },
];

export function setUserLocalStorage(user: Usuario | null): void {
    if (!user) {
        // Remove a sessão se o usuário for passado como null (Logout)
        localStorage.removeItem(CHAVE_SESSAO);
        return;
    }
    localStorage.setItem(CHAVE_SESSAO, JSON.stringify(user));
}

export function getUserLocalStorage(): Usuario | null {
    const json = localStorage.getItem(CHAVE_SESSAO);

    if (!json) {
        return null;
    }

    // try...catch para tratar o erro de parse do JSON caso o usuário não esteja logado
    try {
        const user = JSON.parse(json) as Usuario;
        return user;
    } catch (error) {
        console.error("Erro ao ler sessão do usuário:", error);
        localStorage.removeItem(CHAVE_SESSAO); // Limpa o dado corrompido
        return null;
    }
}

export function inicializarUsuarios(): void {
    const json = localStorage.getItem(CHAVE_USUARIOS);

    if (!json) {
        localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(USUARIOS_PADRAO));
    }
}

export function getUsuarios(): UsuarioCredenciais[] {
    inicializarUsuarios();

    const json = localStorage.getItem(CHAVE_USUARIOS);

    if (!json) {
        return USUARIOS_PADRAO;
    }

    // try...catch para tratar o erro de parse do JSON caso o banco de dados não esteja disponível
    try {
        return JSON.parse(json) as UsuarioCredenciais[];
    } catch (error) {
        console.error("Erro ao ler banco de usuários:", error);
        return USUARIOS_PADRAO; // Fallback seguro
    }
}

export function validarCredenciais(usuario: string, senha: string): boolean {
    const usuarios = getUsuarios();
    
    // Verifica se o usuario é realmente uma string antes do trim
    if (typeof usuario !== 'string') return false;
    
    const usuarioNormalizado = usuario.trim().toLowerCase();

    return usuarios.some(
        (usuario) =>
            // Valida se o dado do "banco" não está corrompido
            typeof usuario.usuario === 'string' &&
            usuario.usuario.trim().toLowerCase() === usuarioNormalizado &&
            usuario.senha === senha
    );
}

export function gerarTokenSessao(): string {
    // Fallback caso o crypto.randomUUID não esteja disponível (HTTP comum)
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    
    // Gerador de UUID v4 simples para ambientes sem suporte ao crypto
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}