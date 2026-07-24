import type { JSX } from "react";

// Interface do usuário
export interface Usuario{
    usuario?: string;
    token?: string;
}

// Contexto de autenticação(login) e logout do usuário
export interface UContext extends Usuario{
    autenticacao: (usuario: string, senha: string) => Promise<void>;
    logout: () => void;
}

// Interface da rota que gerará os proximos elementos com base no login ter sido feito ou não
export interface IAuthProvider {
    children: JSX.Element;
}

// Interface para criar children
export interface Children {
    children: JSX.Element;
}

export interface UsuarioCredenciais {
    usuario: string;
    senha: string;
}

// A interface dos insumos que serão usados para aplicação do sorinho
export interface Insumo {
    id: number; // Define um identificador único para cada insumo
    nome: string; // Define o nome do insumo (Vitamina C 500mg/5ml)
    laboratorioCnpj: string, // Define o CNPJ do laboratório associado ao insumo, permitindo a vinculação entre os insumos e os laboratórios cadastrados
    unidade: 'ml' | 'mg' | 'un'; // Define como ml ou mg ou un(ampolas e frasco-ampola) as unidades de medidas permitidas
    quantidade: number; // Define a quantidade disponível do insumo
    disponivel: boolean; // Define se o insumo está disponível para uso, podendo ser true ou false, sendo opcional
}

// A interface dos laboratórios que serão usados para aplicação do sorinho
export interface Laboratorio {
    cnpj: string; // Define o CNPJ do laboratório
    nome: string; // Define o nome do laboratório
}

// A interface do modal, que define as propriedades que o modal deve receber para funcionar corretamente
export interface ModalProps {
    isOpen: boolean; // Define se o modal está aberto ou fechado
    onFechar: () => void; // Função para fechar o modal
    titulo: string; // Título do modal
    dadosInsumo: Insumo | null; // Dados do insumo para preencher os campos do modal, ou null se for para cadastro
    listaLaboratorios: Laboratorio[]; // Lista de laboratórios para preencher o select de laboratórios no modal
    onSalvar: (insumoPronto: Omit<Insumo, 'id'>) => void; // Função para salvar o insumo, recebendo os dados do insumo sem o ID, que será gerado no componente de estoque
}

// A interface do modal, que define as propriedades que o modal deve receber para funcionar corretamente
export interface ModalSuspenderProps {
    isOpen: boolean; // Define se o modal está aberto ou fechado
    onFechar: () => void; // Função para fechar o modal
    titulo: string; // Título do modal
    listaLaboratorios: Laboratorio[] //
    listaDisponiveis: Insumo[]; // Lista de insumos disponíveis para preencher a lista de disponíveis no modal
    listaSuspensos: Insumo[]; // Lista de insumos suspensos para preencher a lista de suspensos no modal
    onSalvar: (estoqueAtualizado: Insumo[]) => void; // Função para sincronizar o estoque após salvar
}

// A interface do fundo do modal, que define se o modal está aberto ou fechado
export interface FundoProps {
    $isOpen: boolean;
}