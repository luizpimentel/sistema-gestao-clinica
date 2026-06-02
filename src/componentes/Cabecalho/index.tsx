import React from "react";
import * as S from "./estilos";
import {
    GiMedicalDrip,
} from 'react-icons/gi';

const Cabecalho = () => {

    return (
        <S.Container>
            <h1><span><GiMedicalDrip /></span>PróSoro</h1>
        </S.Container>
    );
};

export default Cabecalho;