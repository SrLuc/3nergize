import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";
import Inputs from "../components/CalculatorPage/CalcInputs";
import Panel from "../components/analysisComponents/Panel";

interface CalculatorProps {}

const Calculator = ({}: CalculatorProps) => {
  return (
   
    <S.StyledCalculator>
       <Panel title="Calcule sua conta Mensal"/>
      <Inputs/>
      <NavBottomBar />
    </S.StyledCalculator>
  );
};


export default Calculator;