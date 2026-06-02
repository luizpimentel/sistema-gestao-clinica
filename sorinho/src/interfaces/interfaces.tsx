// A interface dos insumos que serão usados para aplicação do sorinho
export interface Insumo {
    id: number; // Define um identificador único para cada insumo
    nome: string; // Define o nome do insumo (Vitamina C 500mg/5ml)
    laboratorioCnpj: string, // Define o CNPJ do laboratório associado ao insumo, permitindo a vinculação entre os insumos e os laboratórios cadastrados
    unidade: 'ml' | 'mg' | 'un'; // Define como ml ou mg ou un(ampolas e frasco-ampola) as unidades de medidas permitidas
    quantidade: number; // Define a quantidade disponível do insumo
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