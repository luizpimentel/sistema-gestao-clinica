import React, { useEffect, useState, type FormEvent } from 'react';
import * as S from './estilos';
import { IoCloseCircle } from 'react-icons/io5';
import type { ModalProps } from '../../interfaces/interfaces';



const Modal = ({ isOpen, onFechar, titulo, dadosInsumo, listaLaboratorios, onSalvar }: ModalProps) => {

    const [nome, setNome] = useState(''); // Estado para armazenar o nome do insumo
    const [quantidade, setQuantidade] = useState<number | ''>('');
    const [unidade, setUnidade] = useState(''); // Estado para armazenar a unidade do insumo
    const [laboratorio, setLaboratorio] = useState(''); // Estado para armazenar o laboratório do insumo


    useEffect(() => {
        if (isOpen) {
            if (dadosInsumo !== null) {
                setNome(dadosInsumo.nome); // Preenche o campo de nome com os dados do insumo para edição
                setQuantidade(dadosInsumo.quantidade); // Preenche o campo de quantidade com os dados do insumo para edição
                setUnidade(dadosInsumo.unidade); // Preenche o campo de unidade com os dados do insumo para edição
                setLaboratorio(dadosInsumo.laboratorioCnpj); // Preenche o campo de laboratório com os dados do insumo para edição
            } else {
                setNome(''); // Limpa o campo de nome para cadastro
                setQuantidade(''); // Limpa o campo de quantidade para cadastro
                setUnidade(''); // Limpa o campo de unidade para cadastro
                setLaboratorio(''); // Limpa o campo de laboratório para cadastro
            }
        }
    }, [dadosInsumo, isOpen]); // Efeito colateral para preencher os campos do modal com os dados do insumo quando o modal for aberto para edição, ou limpar os campos quando for aberto para cadastro
    
    const salvarInsumo = (evento: FormEvent<HTMLFormElement>) => {
        evento.preventDefault(); // Impede o reload da página ao submeter o formulário do modal

        if (!nome || !unidade || !quantidade || !laboratorio) {
            alert('Informe o nome, unidade, quantidade e o laboratório!');
            return;
        }

        // Chama a função onSalvar passando os dados do insumo sem o ID, que será gerado no componente de estoque, para salvar o insumo no estoque
        onSalvar({
            nome: nome,
            unidade: unidade as 'ml' | 'mg' | 'un',
            quantidade: Number(quantidade),
            laboratorioCnpj: laboratorio,
        });
    }

    return (
        <S.Fundo $isOpen={isOpen} onClick={onFechar} > {/* Ao clicar no fundo, chama a função para fechar o modal */}
            <S.ContainerModal $isOpen={isOpen} onClick={(e) => e.stopPropagation()}> {/** Impede que o clique no fundo e feche o modal quando clicar dentro do container do modal */}
                <S.BotaoFechar onClick={onFechar}><IoCloseCircle /></S.BotaoFechar>

                <S.TituloModal>{titulo}</S.TituloModal>

                <S.Formulario onSubmit={salvarInsumo}> {/* Ao submeter o formulário, chama a função para salvar o insumo, passando os dados do insumo sem o ID, que será gerado no componente de estoque */}

                    <S.CampoContainer>
                        <label>Nome:</label>
                        <input name="nome" value={nome} onChange={e => setNome(e.target.value)} />
                    </S.CampoContainer>

                    <S.CampoContainer>
                        <label> Unidade:</label>
                        <select value={unidade} onChange={e => setUnidade(e.target.value as 'ml' | 'mg' | 'un')}>
                            <option value='' disabled> Selecione...</option>
                            <option value='un'> Unidade (un)</option>
                            <option value='ml'> Mililitro (ml)</option>
                            <option value='mg'> Miligrama (mg)</option>
                        </select>
                    </S.CampoContainer>

                    <S.CampoContainer>
                        <label>Quantidade:</label>
                        <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value === '' ? '' : Number(e.target.value))} />
                    </S.CampoContainer>

                    <S.CampoContainer><label>Laboratório:</label>
                        <select value={laboratorio} onChange={e => setLaboratorio(e.target.value)}>
                            <option value='' disabled> Selecione...</option>
                            {listaLaboratorios.map((lab) => (
                                <option key={lab.cnpj} value={lab.cnpj}>{lab.nome}</option>
                            ))}
                        </select>
                    </S.CampoContainer>

                    <S.CampoContainer>

                        <button type="submit">Salvar</button>

                    </S.CampoContainer>
                </S.Formulario>


            </S.ContainerModal >
        </S.Fundo >
    )
}

export default Modal;
