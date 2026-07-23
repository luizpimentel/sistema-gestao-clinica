import { useEffect, useState } from 'react';
import * as S from './estilos';
import { IoCloseCircle, IoArrowUp, IoArrowDown } from 'react-icons/io5';
import type { ModalSuspenderProps, Insumo } from '../../interfaces/interfaces';


const ModalSuspender = ({ isOpen, onFechar, titulo, listaLaboratorios, onSalvar }: ModalSuspenderProps) => {


    const [listaDisponiveis, setListaDisponiveis] = useState<Insumo[]>([]); // Estado para armazenar a lista de insumos disponíveis
    const [listaSuspensos, setListaSuspensos] = useState<Insumo[]>([]); // Estado para armazenar a lista de insumos suspensos

    const [selecionadoId, setSelecionadoId] = useState<number | null>(null); // Estado para armazenar o ID do insumo selecionado na lista de disponíveis
    const [origemSelecao, setOrigemSelecao] = useState<'disponivel' | 'suspenso' | null>(null); // Estado para armazenar a origem da seleção (disponível ou suspenso)

    const [justificativa, setJustificativa] = useState(''); // Estado para armazenar a justificativa digitada pelo usuário


    useEffect(() => {
        if (isOpen) {
            const data = localStorage.getItem('estoque'); // Tenta recuperar os dados do estoque do localStorage, se existirem, para manter a persistência dos dados entre as sessões do navegador
            const estoque: Insumo[] = data ? JSON.parse(data) : [];
            setListaDisponiveis(estoque.filter(item => item.disponivel !== false)); // Atualiza a lista de insumos disponíveis com os itens que estão disponíveis
            setListaSuspensos(estoque.filter(item => item.disponivel === false)); // Atualiza a lista de insumos suspensos com os itens que estão suspensos

            // Reseta a seleção e a justificativa ao abrir o modal
            setSelecionadoId(null);
            setOrigemSelecao(null);
            setJustificativa('');

        }
    }, [isOpen]); // Efeito colateral para atualizar as listas de insumos disponíveis e suspensos quando o modal for aberto

    // Função para selecionar um item da lista, armazenando o ID e a origem da seleção
    const selecionarItem = (id: number, origem: 'disponivel' | 'suspenso') => {
        setSelecionadoId(id);
        setOrigemSelecao(origem);
    };

    // Função para mover o item de disponível para suspenso, atualizando o estado das listas e do localStorage
    const moverParaSuspensos = () => {
        if (selecionadoId === null || origemSelecao !== 'disponivel') return; // Verifica se há um item selecionado e se a origem da seleção é a lista de disponíveis

        const item = listaDisponiveis.find(i => i.id === selecionadoId); // Encontra o item selecionado na lista de disponíveis
        if (item) {
            setListaDisponiveis(listaDisponiveis.filter(i => i.id !== selecionadoId)); // Remove o item da lista de disponíveis
            setListaSuspensos([...listaSuspensos, { ...item, disponivel: false }]); // Adiciona o item à lista de suspensos, marcando-o como indisponível
            setSelecionadoId(null);
            setOrigemSelecao(null);
        }
    }

    // Função para mover o item de suspenso para disponível, atualizando o estado das listas e do localStorage
    const moverParaDisponiveis = () => {
        if (selecionadoId === null || origemSelecao !== 'suspenso') return; // Verifica se há um item selecionado e se a origem da seleção é a lista de suspensos

        const item = listaSuspensos.find(i => i.id === selecionadoId); // Encontra o item selecionado na lista de suspensos
        if (item) {
            setListaSuspensos(listaSuspensos.filter(i => i.id !== selecionadoId)); // Remove o item da lista de suspensos
            setListaDisponiveis([...listaDisponiveis, { ...item, disponivel: true }]); // Adiciona o item à lista de disponíveis, marcando-o como disponível
            setSelecionadoId(null);
            setOrigemSelecao(null);
        }
    }

    // Função para salvar as alterações, atualizando o localStorage com as listas de disponíveis e suspensos
    const salvarAlteracoes = () => {
        if (justificativa.trim() === '') { // Verifica se a justificativa está vazia
            alert('Por favor, forneça uma justificativa para suspender ou reativar o insumo.'); // Exibe um alerta solicitando a justificativa
            return;
        }

        // Junta as duas listas atualizadas
        const estoqueAtualizado = [...listaDisponiveis, ...listaSuspensos];

        localStorage.setItem('estoque', JSON.stringify(estoqueAtualizado)); // Atualiza o localStorage com o estoque atualizado
        onSalvar(estoqueAtualizado);
        onFechar(); // Fecha o modal após salvar as alterações
    };

    const [termoBusca, setTermoBusca] = useState(''); // Estado para armazenar o termo de busca digitado pelo usuário
    const listasFiltradas = { //    Cria um objeto com as listas filtradas de disponíveis e suspensos com base no termo de busca
        disponiveis: listaDisponiveis.filter(item => item.nome.toLowerCase().includes(termoBusca.toLowerCase())).sort((a, b) => a.nome.localeCompare(b.nome)), // Filtra a lista de disponíveis com base no termo de busca
        suspensos: listaSuspensos.filter(item => item.nome.toLowerCase().includes(termoBusca.toLowerCase())).sort((a, b) => a.nome.localeCompare(b.nome)), // Filtra a lista de suspensos com base no termo de busca
    };

    if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

    return (
        <S.Fundo $isOpen={isOpen} onClick={onFechar} > {/* Ao clicar no fundo, chama a função para fechar o modal */}
            <S.ContainerModal $isOpen={isOpen} onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}> {/** Impede que o clique no fundo e feche o modal quando clicar dentro do container do modal */}
                <S.BotaoFechar onClick={onFechar}><IoCloseCircle /></S.BotaoFechar>

                <S.TituloModal>{titulo}</S.TituloModal>

                <S.ContainerModalSuspender>

                    <S.ContainerJustificativa>
                        <S.DescricaoContainerJustificativa>Informe a justificativa para suspender ou reativar o insumo selecionado. O medicamento será removido da lista de disponíveis e adicionado à lista de suspensos. Pacientes com prescrição ativa do medicamento suspenso não poderão mais utilizá-lo, e o mesmo será removido da lista de insumos disponíveis para prescrição.</S.DescricaoContainerJustificativa>
                        <S.DescricaoContainerJustificativa>Ao reativar um insumo suspenso, ele será removido da lista de suspensos e adicionado à lista de disponíveis. Pacientes com prescrição ativa do medicamento reativado poderão utilizá-lo normalmente, e o mesmo será adicionado à lista de insumos disponíveis para prescrição.</S.DescricaoContainerJustificativa>
                        <S.DescricaoContainerJustificativa>É importante ressaltar que a suspensão ou reativação de um insumo deve ser feita com cautela, considerando a segurança e o bem-estar dos pacientes. A justificativa fornecida será registrada para fins de auditoria e acompanhamento das decisões tomadas.</S.DescricaoContainerJustificativa>
                        <S.DescricaoContainerJustificativa>Certifique-se de fornecer uma justificativa clara e objetiva ao suspender ou reativar um insumo, garantindo que as decisões sejam baseadas em critérios clínicos e regulatórios adequados.</S.DescricaoContainerJustificativa>
                        <S.TituloContainerJustificativa>Justificativa:</S.TituloContainerJustificativa>
                        <S.Data>Data: {new Date().toLocaleDateString()}</S.Data>
                        <S.TextareaJustificativa placeholder="Digite a justificativa para suspender ou reativar o(s) insumo(s) alterado(s). 
    Exemplos de justificativas:
    - Suspensão do insumo X devido a complexidade com entregas do fornecedor.
    - Reativação do insumo Y após análise de mercado e aumento da demanda." value={justificativa} onChange={(e) => setJustificativa(e.target.value)} />

                        <S.ContainerBotoes>
                            <S.BotaoSalvar onClick={salvarAlteracoes}>Salvar</S.BotaoSalvar>
                        </S.ContainerBotoes>
                    </S.ContainerJustificativa>

                    <S.ContainerTransferencia>
                        <S.ColunaLista>
                            <S.BuscaLista placeholder="Digite o nome do insumo..." value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} />
                            <S.TituloLista>Disponíveis</S.TituloLista>
                            <S.ListaBox>
                                {listasFiltradas.disponiveis.map(item => {
                                    const labSelecionado = listaLaboratorios.find((lab) => lab.cnpj === item.laboratorioCnpj);
                                    const nomeLab = labSelecionado ? labSelecionado.nome : 'Laboratório não encontrado';

                                    return (
                                        <S.ItemLista key={item.id} onClick={() => selecionarItem(item.id, 'disponivel')} $selecionado={selecionadoId === item.id}>
                                            <span className="nome-item">{item.nome} |{nomeLab} </span>
                                        </S.ItemLista>
                                    )
                                })}
                            </S.ListaBox>
                        </S.ColunaLista>

                        <S.ContainerSetas>
                            <S.BotaoSeta onClick={moverParaSuspensos} disabled={origemSelecao !== 'disponivel' || selecionadoId === null}> <IoArrowDown /> </S.BotaoSeta>
                            <S.BotaoSeta onClick={moverParaDisponiveis} disabled={origemSelecao !== 'suspenso' || selecionadoId === null}> <IoArrowUp /> </S.BotaoSeta>
                        </S.ContainerSetas>

                        <S.ColunaLista>
                            <S.ListaBox>
                                {listasFiltradas.suspensos.map(item => {
                                    const labSelecionado = listaLaboratorios.find((lab) => lab.cnpj === item.laboratorioCnpj);
                                    const nomeLab = labSelecionado ? labSelecionado.nome : 'Laboratório não encontrado';

                                    return (
                                        <S.ItemLista key={item.id} onClick={() => selecionarItem(item.id, 'suspenso')} $selecionado={selecionadoId === item.id}>
                                            <span className="nome-item">{item.nome} |{nomeLab} </span>
                                        </S.ItemLista>
                                    )
                                })}
                            </S.ListaBox>
                            <S.TituloLista>Suspensos</S.TituloLista>
                        </S.ColunaLista>
                    </S.ContainerTransferencia>

                </S.ContainerModalSuspender>



            </S.ContainerModal >
        </S.Fundo >
    )
}

export default ModalSuspender;
