import React from "react";
import * as S from "./styles";

//Navigation Bar
import ItemBottomBar from "./ItemBottomBar";

//Icons
import { AiFillHome } from "react-icons/ai";
import { AiTwotonePieChart } from "react-icons/ai";
import { HiDocumentSearch } from "react-icons/hi";

//routes
import { Link } from "react-router-dom";

interface NavBottomBarProps {}

const NavBottomBar = ({}: NavBottomBarProps) => {
  return (
    <S.StyledNavBottomBar>
      <Link to="/" className="hvr-float">
        {/*Home icon*/}
        <ItemBottomBar name="Inicio">
          <AiFillHome size={40} color={"#fff"} />
        </ItemBottomBar>
      </Link>

      <Link to="/Calculator" className="hvr-float">
        {/*Calculator icon*/}
        <ItemBottomBar name="Calculadora">
          <AiTwotonePieChart size={40} color={"#fff"} />
        </ItemBottomBar>
      </Link>

      <Link to="/Analysis" className="hvr-float">
        {/*Analysis icon*/}
        <ItemBottomBar name="Análise">
          <HiDocumentSearch size={40} color={"#fff"} />
        </ItemBottomBar>
      </Link>
    </S.StyledNavBottomBar>
  );
};

export default NavBottomBar;
