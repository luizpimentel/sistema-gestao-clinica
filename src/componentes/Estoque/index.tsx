import { useState } from "react";
import * as S from "./estilos";

import {
    FaBriefcaseMedical,
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import { BsCapsulePill } from "react-icons/bs";
import type { Insumo, Laboratorio } from "../../interfaces/interfaces";
import ModalCadEdit from "../ModalCadEdit";
import ModalSuspender from "../ModalSuspender";


const Estoque = () => {
    const data = localStorage.getItem('estoque'); // Tenta recuperar os dados do estoque do localStorage, se existirem, para manter a persistência dos dados entre as sessões do navegador
    const dataLab = localStorage.getItem('laboratorios'); // o mesmo para os laboratórios, permitindo que os laboratórios cadastrados também sejam persistidos entre as sessões do navegador

    const [estoque, setEstoque] = useState<Insumo[]>(data ? JSON.parse(data) : []); // Define o estado do estoque, inicializando com os dados do localStorage ou um array vazio se não houver dados

    const [listaLaboratorios, setListaLaboratorios] = useState<Laboratorio[]>(dataLab ? JSON.parse(dataLab) : [
        { cnpj: '00.000.000/0001-00', nome: 'Laboratório A' },
        { cnpj: '11.111.111/0001-11', nome: 'Laboratório B' },
    ]); // Define o estado dos laboratórios, inicializando com os dados do localStorage ou um array vazio se não houver dados

    // Hook dos dados dos insumos
    const gerarID = () => Math.round(Math.random() * 1000); //Gera um número aleatório x1000 para ser o ID do insumo

    const [termoBusca, setTermoBusca] = useState(''); // Estado para armazenar o nome do insumo digitado pelo usuário para busca, inicializando como string vazia

    const [modalAberto, setModalAberto] = useState(false); // Estado para controlar a abertura do modal de cadastro/edição de insumos, inicializando como fechado (false)
    const [modalSuspenderAberto, setModalSuspenderAberto] = useState(false); // Estado para controlar a abertura do modal de suspensão de insumos, inicializando como fechado (false)

    // Estado para armazenar o ID do insumo que está sendo editado, ou null se nenhum insumo estiver sendo editado
    const [editandoId, setEditandoId] = useState<number | null>(null);

    // Estado para armazenar o título do modal, que pode ser "Cadastrar Insumo" ou "Editar Insumo" dependendo da ação do usuário
    const abrirCadastrar = () => {
        setEditandoId(null); // Limpa o ID de edição para garantir que o modal seja aberto para cadastro, não para edição
        setModalAberto(true); // Abre o modal para cadastro
    }

    const abrirEditar = (idDoItem: Insumo) => {
        setEditandoId(idDoItem.id); // Define o ID do insumo que está sendo editado para preencher os campos do modal com os dados do insumo selecionado
        setModalAberto(true); // Abre o modal para edição
    }

    const abrirSuspender = () => {
        setModalSuspenderAberto(true); // Abre o modal para suspensão
    }

    const fecharModal = () => setModalAberto(false); // Função para fechar o modal, definindo o estado como false

    // Função para salvar um novo insumo, validando os campos e atualizando o estado e o localStorage
    function salvarInsumo(dadosModal: Omit<Insumo, 'id'>) {

        const transacao: Insumo = {
            id: editandoId !== null ? editandoId : gerarID(), // Se estiver editando, mantém o mesmo ID, senão gera um novo
            nome: dadosModal.nome,
            laboratorioCnpj: dadosModal.laboratorioCnpj,
            unidade: dadosModal.unidade,
            quantidade: dadosModal.quantidade,
            disponivel: true, // Define o insumo como disponível por padrão ao ser cadastrado ou editado
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
        fecharModal(); // Fecha o modal após salvar

    }

    const insumoEditado = estoque.find(item => item.id === editandoId) || null; // Encontra o insumo que está sendo editado com base no ID, ou retorna null se nenhum insumo estiver sendo editado

    // Função para deletar um insumo, removendo-o do estado e do localStorage
    const deletarInsumo = (item: Insumo) => {
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
                <S.CaixaBotaoAcoes>
                    <button title="Adicionar Insumo" onClick={abrirCadastrar}><FaBriefcaseMedical /></button>
                    <button title="Suspender Insumo" onClick={abrirSuspender}><BsCapsulePill /></button>
                </S.CaixaBotaoAcoes>
            </S.ConteinerBusca>


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

                                <span className="nome-item">{item.nome}</span>
                                <span className="quantidade-item">{item.quantidade}{item.unidade}</span>
                                <span className="laboratorio-item">{nomeLab}</span>

                                <S.CaixaBotoes>
                                    {/** Botão para editar o item do estoque, preenchendo os campos com os dados do item selecionado e definindo o ID do item que está sendo editado */}
                                    <S.BotaoLista title="Editar Insumo" onClick={() => abrirEditar(item)}><FaEdit /></S.BotaoLista>


                                    {/** Botão para remover o item do estoque, atualizando o estado e o localStorage */}
                                    <S.BotaoLista title="Remover Insumo" onClick={() => deletarInsumo(item)}><FaTrash /></S.BotaoLista>
                                </S.CaixaBotoes>
                            </S.ItemListas>
                        )
                    })}
                </S.ContainerListas>
            )}

            <ModalCadEdit
                isOpen={modalAberto}
                onFechar={fecharModal}
                titulo={editandoId === null ? "Cadastrar Insumo" : "Editar Insumo"}
                dadosInsumo={insumoEditado}
                listaLaboratorios={listaLaboratorios}
                onSalvar={salvarInsumo}
            />

            <ModalSuspender
                isOpen={modalSuspenderAberto}
                onFechar={() => setModalSuspenderAberto(false)}
                titulo="Suspender Insumos"
                listaDisponiveis={estoque.filter(item => item.disponivel)}
                listaSuspensos={estoque.filter(item => !item.disponivel)}
                listaLaboratorios={listaLaboratorios}
                />
            
        </S.Container>
    );
}

export default Estoque;