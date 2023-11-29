import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

interface BottomSearchProps {
}

const BottomSearch = ({ }: BottomSearchProps) => {
    return (
        <S.StyledBottomSearch>
            <Link to="/Calculator" className="hvr-float">
                <h6>Consultar</h6>
            </Link>
        </S.StyledBottomSearch>
    );
};

export default BottomSearch;
