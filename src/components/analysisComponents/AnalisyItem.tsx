import React from 'react';
import * as S from './styles'
import { CSSProperties } from 'styled-components';

interface AnalisyPanelItemProps {
  value?: any;
  name?: string;
  img?: string;
  rate?: number;
  Color?: string;
}

const AnalisyPanelItem = ({
  value,
  name,
  img,
  rate,
  Color
}: AnalisyPanelItemProps) => {
  return (
    <S.StyledAnalisyPanelItem>
      <header style={{ backgroundColor: Color }}>
        <p>R${value}</p>
      </header>

      <article>
        <p>{name}</p>
        <img src={img} alt="" />
      </article>

      <footer style={{ backgroundColor: Color }}>
        <p>{rate}%</p>
      </footer>
    </S.StyledAnalisyPanelItem>
  );
};


export default AnalisyPanelItem