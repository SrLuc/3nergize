import React from "react";
import * as S from "./styles";

interface ApresentationProps {
}

const Apresentation = ({ }: ApresentationProps) => {
    return (
        <S.StyledApresentation>
            <h1>3nergize</h1>
            <h3>Manager</h3>
            <h5>Faça consultas sobre seus Gastos</h5>
            <p>Vamos gerenciar e otimizar o seu uso de energia</p>
        </S.StyledApresentation>
    );
};

export default Apresentation;
