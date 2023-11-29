import React from "react";
import * as S from "./styles";



import logo from '../../assets/logo.svg';

interface PanelProps {
  title: string;
}


const Panel = ({ title }: PanelProps) => {
  return (
    <S.StyledPanel>
        <p>{title}</p>
        <i>
          <img src={logo} alt="" />
        </i>
    </S.StyledPanel>
  );
};

export default Panel;
 