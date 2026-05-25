import { useState } from "react";
import * as S from "./estilos";
import {
    FaEdit,
    FaTrash,
} from "react-icons/fa";

// A interface dos insumos que serão usados para aplicação do sorinho
interface Insumo {
    id: number; // Define um identificador único para cada insumo
    nome: string; // Define o nome do insumo (Vitamina C 500mg/5ml)
    laboratorioCnpj: string, // Define o CNPJ do laboratório associado ao insumo, permitindo a vinculação entre os insumos e os laboratórios cadastrados
    unidade: 'ml' | 'mg' | 'un'; // Define como ml ou mg ou un(ampolas e frasco-ampola) as unidades de medidas permitidas
    quantidade: number; // Define a quantidade disponível do insumo
}

interface Laboratorio {
    cnpj: string; // Define o CNPJ do laboratório
    nome: string; // Define o nome do laboratório
}

const Estoque = () => {
    const data = localStorage.getItem('estoque'); // Tenta recuperar os dados do estoque do localStorage, se existirem, para manter a persistência dos dados entre as sessões do navegador
    const dataLab = localStorage.getItem('laboratorios'); // o mesmo para os laboratórios, permitindo que os laboratórios cadastrados também sejam persistidos entre as sessões do navegador

    const [estoque, setEstoque] = useState<Insumo[]>(data ? JSON.parse(data) : []); // Define o estado do estoque, inicializando com os dados do localStorage ou um array vazio se não houver dados

    const [listaLaboratorios, setListaLaboratorios] = useState<Laboratorio[]>(dataLab ? JSON.parse(dataLab) : [
        { cnpj: '00.000.000/0001-00', nome: 'Laboratório A' },
        { cnpj: '11.111.111/0001-11', nome: 'Laboratório B' },
    ]); // Define o estado dos laboratórios, inicializando com os dados do localStorage ou um array vazio se não houver dados
    const [laboratorio, setLaboratorio] = useState(''); // Define o estado do laboratório selecionado para o insumo, inicializando como string vazia

    // Hook dos dados dos insumos
    const gerarID = () => Math.round(Math.random() * 1000); //Gera um número aleatório x1000 para ser o ID do insumo
    const [nome, setNome] = useState(''); //Define as variáveis com estado tipado 


    //Força o tipo para aceitar apenas strings vazias no incício, mas exigindo a tipagem correta depois
    const [unidade, setUnidade] = useState<'' | 'ml' | 'mg' | 'un'>('');
    const [quantidade, setQuantidade] = useState<number | ''>('');

    // Estado para armazenar o ID do insumo que está sendo editado, ou null se nenhum insumo estiver sendo editado
    const [editandoId, setEditandoId] = useState<number | null>(null);

    const [termoBusca, setTermoBusca] = useState(''); // Estado para armazenar o nome do insumo digitado pelo usuário para busca, inicializando como string vazia

    // Função para salvar um novo insumo, validando os campos e atualizando o estado e o localStorage
    function salvarInsumo() {
        if (!nome || !unidade || !quantidade) {
            alert('Informe o nome, unidade e a quantidade!');
            return;
        }

        const transacao: Insumo = {
            id: editandoId !== null ? editandoId : gerarID(), // Se estiver editando, mantém o mesmo ID, senão gera um novo
            nome: nome,
            laboratorioCnpj: laboratorio,
            unidade: unidade,
            quantidade: Number(quantidade), // Garantia de ser número
        };

        let novoArrayEstoque;
        if (editandoId !== null) {
            novoArrayEstoque = estoque.map((item) => item.id === editandoId ? transacao : item); // Se estiver editando, substitui o item antigo pelo novo, senão mantém o item
        } else {
            novoArrayEstoque = [...estoque, transacao]; // Se não estiver editando, adiciona o novo item ao array
        }

        // Atualiza o estado e o localStorage com o novo array de estoque
        setEstoque(novoArrayEstoque);
        localStorage.setItem('estoque', JSON.stringify(novoArrayEstoque));

        // Reset
        cancelarEdicao(); // Limpa os campos e o ID de edição após salvar
    }

    // Função para a edição de um insumo, preenchendo os campos com os dados do insumo selecionado e definindo o ID do insumo que está sendo editado
    function editarInsumo(item: Insumo) {
        setEditandoId(item.id); // Define o ID do insumo que está sendo editado
        setNome(item.nome); // Preenche os inputs com os dados do insumo para editar
        setUnidade(item.unidade);
        setQuantidade(item.quantidade);
    }

    // Função para cancelar a edição, limpando os campos e o ID do insumo que está sendo editado
    function cancelarEdicao() {
        setEditandoId(null); // Limpa o ID do insumo que está sendo editado
        setNome(''); // Limpa os inputs
        setUnidade('');
        setQuantidade('');
    }

    // Função para deletar um insumo, removendo-o do estado e do localStorage
    function deletarInsumo(item: Insumo) {
        const novoArray = estoque.filter(i => i.id !== item.id);
        setEstoque(novoArray);
        localStorage.setItem('estoque', JSON.stringify(novoArray));
    }

    // Filtra os insumos com base no termo de busca, comparando o nome do insumo com o termo digitado pelo usuário, ignorando maiúsculas e minúsculas
    const insumosFiltrados = estoque.filter((item) => {
        const nomedoItem = item.nome.toLowerCase();
        const busca = termoBusca.toLowerCase();
        return nomedoItem.includes(busca);
    })




    return (
        <S.Container>
            <S.Titulo>Estoque</S.Titulo>

            <S.ConteinerBusca>
                <S.InputBusca placeholder="Digite o nome do item" value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} />
            </S.ConteinerBusca>
            {/** 
            <div>
                <h3>Adicionar novo insumo:</h3>
                <label>Nome:</label>
                <input name="nome" value={nome} onChange={e => setNome(e.target.value)} />
                <label>Laboratório:</label>
                <select value={laboratorio} onChange={e => setLaboratorio(e.target.value)}>
                    <option value='' disabled> Selecione...</option>
                    {listaLaboratorios.map((lab) => (
                        <option key={lab.cnpj} value={lab.cnpj}>{lab.nome}</option>
                    ))}
                </select>
                <label>Unidade:</label>
                <select value={unidade} onChange={e => setUnidade(e.target.value as 'ml' | 'mg' | 'un')}>
                    <option value='' disabled> Selecione...</option>
                    <option value='un'> Unidade (un)</option>
                    <option value='ml'> Mililitro (ml)</option>
                    <option value='mg'> Miligrama (mg)</option>
                </select>
                <label>Quantidade:</label>
                <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value === '' ? '' : Number(e.target.value))} />
                {editandoId === null ? (
                    <button onClick={salvarInsumo}>Adicionar</button>
                ) : (
                    <>
                        <button onClick={salvarInsumo}>Salvar</button>
                        <button onClick={cancelarEdicao}>Cancelar</button>
                    </>
                )}
            </div>
            */}

            {/** Exibe os insumos filtrados ou não */}
            {insumosFiltrados.length === 0 ? (
                <p>Nenhum item encontrado para "{termoBusca}"</p>
            ) : (
                <S.ContainerListas>
                    {insumosFiltrados.map((item) => {
                        const labSelecionado = listaLaboratorios.find((lab) => lab.cnpj === item.laboratorioCnpj);
                        const nomeLab = labSelecionado ? labSelecionado.nome : 'Laboratório não encontrado';

                        return (
                            <S.ItemListas key={item.id}>
                                <S.CaixaInfo>
                                    <strong>{item.nome}</strong> <span>{item.quantidade}{item.unidade}</span> {nomeLab}
                                </S.CaixaInfo>

                                <S.CaixaBotoes>
                                    {/** Botão para editar o item do estoque, preenchendo os campos com os dados do item selecionado e definindo o ID do item que está sendo editado */}
                                    <S.BotaoLista onClick={() => editarInsumo(item)}><FaEdit /></S.BotaoLista>

                                    {/** Botão para remover o item do estoque, atualizando o estado e o localStorage */}
                                    <S.BotaoLista onClick={() => deletarInsumo(item)}><FaTrash /></S.BotaoLista>
                                </S.CaixaBotoes>
                            </S.ItemListas>
                        )
                    })}
                </S.ContainerListas>
            )}
        </S.Container>
    )
}

export default Estoque;