import React from "react";
import * as S from "./StylesPage";

import NavBottomBar from "../components/NavBottomBar/NavBottomBar";
import Panel from "../components/analysisComponents/Panel";
import AnalysisPanel from "../components/analysisComponents/AnalysisPanel";


interface AnalysisProps {}

const Analysis = ({}: AnalysisProps) => {
  return (
    <S.StyledAnalysisPage>
      <Panel title="Entenda sua conta"/>
      <AnalysisPanel/>
      <NavBottomBar />
    </S.StyledAnalysisPage>
  );
};

export default Analysis;
