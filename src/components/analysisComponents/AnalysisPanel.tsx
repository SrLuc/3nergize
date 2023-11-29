import React, {useEffect, useState} from "react";
import * as S from "./styles";

import AnalisyPanelItem from "./AnalisyItem";

import tower from "../../assets/tower.svg";
import building from "../../assets/building.svg";
import water from "../../assets/water.svg";
import file from "../../assets/file.svg";
import hand from "../../assets/hand.svg";

interface AnalisyPanelProps {}

const AnalysisPanel = ({}: AnalisyPanelProps) => {

  const [myValue, setMyValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('valorTotal');
    if (storedValue) {
      setMyValue(storedValue);
    }
  }, []);

  let valor = myValue;
  let valorTotal = parseInt(valor) || 0

  let g = valorTotal * 0.40; //geração
  let t = valorTotal * 0.03 //transmissão
  let d = valorTotal * 0.16 //distribuição
  let e = valorTotal * 0.09 //encargos

  
  return (
    <S.StyledAnalisyPanel>
      <AnalisyPanelItem
        value={g.toFixed(2)}
        name="GERAÇÃO"
        img={water}
        rate={41}
        Color="#06A37C"
      />
      <AnalisyPanelItem
        value={t.toFixed(2)}
        name="TRANSMISSÃO"
        img={tower}
        rate={3}
        Color="#72AFA0"
      />
      <AnalisyPanelItem
        value={d.toFixed(2)}
        name="DISTRIBUIÇÃO"
        img={building}
        rate={16}
        Color="#2A6B39"
      />
      <AnalisyPanelItem
        value={e.toFixed(2)}
        name="ENCARGOS"
        img={hand}
        rate={9}
        Color="#C96923"
      />
      <AnalisyPanelItem
        value={e.toFixed(2)}
        name="TRIBUTOS"
        img={file}
        rate={31}
        Color="#A30606"
      />
    </S.StyledAnalisyPanel>
  );
};

export default AnalysisPanel;