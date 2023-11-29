import React from "react";
import * as S from "./styles";

interface ItemBottomBarProps {
  children: React.ReactNode;
  name?: string;
}

const ItemBottomBar = ({ children, name }: ItemBottomBarProps) => {
  return (
    <S.StyledItemBottomBar>
      <i>{children}</i>
      <p>{name}</p>
    </S.StyledItemBottomBar>
  );
};

export default ItemBottomBar;


