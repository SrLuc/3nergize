import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

const Inputs: React.FC = () => {
  const leituraInicialRef = useRef<HTMLInputElement>(null);
  const dataInicialRef = useRef<HTMLInputElement>(null);
  const leituraFinalRef = useRef<HTMLInputElement>(null);
  const dataFinalRef = useRef<HTMLInputElement>(null);

  // Consuming the electricity sector api
  const fetchApiDataTarifa = async (): Promise<number> => {
    try {
      const response = await fetch(
        "https://apise.way2.com.br/v1/tarifas?apikey=2163780d87ee4237884c498ece5ea7cc&agente=CELPE&ano=2022"
      );
      const data = await response.json();
      const tarifademandatusd: number = data[0].tarifaconsumotusd;
      setTarifaConsumo(tarifademandatusd);
      return tarifademandatusd;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch tarifa data");
    }
  };

  //taxaIluminacao
  const fetchApiDataTarifaBase = async (): Promise<number> => {
    try {
      const response = await fetch(
        "https://apise.way2.com.br/v1/tarifas?apikey=2163780d87ee4237884c498ece5ea7cc&agente=CELPE&ano=2022"
      );
      const data = await response.json();
      const tarifademandatusd: number = data[0].tarifademandatusd;
      setTaxaIluminacao(tarifademandatusd);
      return tarifademandatusd;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch tarifa base data");
    }
  };

  //tarifaBandeira
  const fetchApiDataTarifaBandeira = async (): Promise<number> => {
    try {
      const response = await fetch(
        "https://apise.way2.com.br/v1/bandeiras?apikey=2163780d87ee4237884c498ece5ea7cc&datainicial=2023-03-01&datafinal=2023-03-31"
      );
      const data = await response.json();
      const value: number = data.items[0].value;
      setTarifaBandeira(value);
      return value;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch tarifa bandeira data");
    }
  };

  useEffect(() => {
    const getTarifaData = async () => {
      const tarifa = await fetchApiDataTarifa();
      setTarifaConsumo(tarifa);
    };
    getTarifaData();
  }, []);

  useEffect(() => {
    const getTarifaBaseData = async () => {
      const tarifaBase = await fetchApiDataTarifaBase();
      setTaxaIluminacao(tarifaBase);
    };
    getTarifaBaseData();
  }, []);

  useEffect(() => {
    const getTarifaBandeiraData = async () => {
      const tarifaBandeira = await fetchApiDataTarifaBandeira();
      setTarifaBandeira(tarifaBandeira);
    };
    getTarifaBandeiraData();
  }, []);

  const [taxaIluminacao, setTaxaIluminacao] = useState<number | null>(null);
  const [tarifaConsumo, setTarifaConsumo] = useState<number | null>(null);
  const [tarifaBandeira, setTarifaBandeira] = useState<number | null>(null);

  let consumo = 0;
  const [consumoAtual, setConsumoAtual] = useState(consumo);

  let periodoDias = 0;
  const [Dias, setDias] = useState(periodoDias);

  let valorTotal = 0;
  const [novoValorTotal, setnovoValorTotal] = useState(consumo);

  let valorInicial = Number(localStorage.getItem("leituraInicial")) || null;
  const [novoValorInicial, setnovoValorInicial] = useState(valorInicial);

  const handleButtonClick = () => {
    const leituraInicial: number = Number(leituraInicialRef.current?.value);
    setnovoValorInicial(leituraInicial);
    const leituraFinal: number = Number(leituraFinalRef.current?.value);
    const dataInicial: Date = new Date(dataInicialRef.current?.value || "");
    const dataFinal: Date = new Date(dataFinalRef.current?.value || "");

    // Calcula a quantidade de dias entre as datas de leitura
    const periodoDias = Math.ceil(
      (dataFinal.getTime() - dataInicial.getTime()) / (1000 * 60 * 60 * 24)
    );
    setDias(periodoDias);

    // Calcula o consumo de energia em kWh
    const consumo = leituraFinal - leituraInicial;
    setConsumoAtual(consumo);

    // Calcula o valor da conta de energia elétrica
    const taxaConsumoNumber: number = Number(tarifaConsumo);
    const taxaIluminacaoNumber: number = Number(taxaIluminacao);
    const valorConsumo: number = (taxaConsumoNumber / 100) * consumo;
    const valorTotal = valorConsumo + taxaIluminacaoNumber;
    setnovoValorTotal(valorTotal);

    // Salva o resultado no local storage
    const simulacao: {
      periodo: string;
      consumo: string;
      valorTotal: string;
      tarifa: string;
      taxaIluminacao: string;
      dias: string;
    } = {
      periodo: `${dataInicial.toLocaleDateString()} a ${dataFinal.toLocaleDateString()}`,
      consumo: `${consumo} kWh`,
      valorTotal: `R$ ${valorTotal.toFixed(2)}`,
      tarifa: `${tarifaConsumo}`,
      taxaIluminacao: `${taxaIluminacao}`,
      dias: `${periodoDias} Dias`,
    };

    // Armazena os valores imediatamente após o clique do botão
    localStorage.setItem("simulacao", JSON.stringify(simulacao));
    localStorage.setItem("consumo", JSON.stringify(consumo));
    localStorage.setItem("periodoDias", JSON.stringify(periodoDias));
    localStorage.setItem("valorTotal", JSON.stringify(valorTotal));
    localStorage.setItem("leituraInicial", leituraInicial.toString());
    localStorage.setItem("dataInicial", dataInicial.toISOString());
  };

  useEffect(() => {
    const consumoSalvo = JSON.parse(localStorage.getItem("consumo") || "null");
    const diasSalvos = JSON.parse(
      localStorage.getItem("periodoDias") || "null"
    );
    const valorSalvo = JSON.parse(localStorage.getItem("valorTotal") || "null");

    if (consumoSalvo !== null) {
      setConsumoAtual(consumoSalvo);
    }

    if (diasSalvos !== null) {
      setDias(diasSalvos);
    }

    if (valorSalvo !== null) {
      setnovoValorTotal(valorSalvo);
    }
  }, []);

  useEffect(() => {
    const dataInicialSalva = localStorage.getItem("dataInicial");
    if (dataInicialSalva && dataInicialRef.current) {
      const dataInicial = new Date(dataInicialSalva);
      dataInicialRef.current.value = dataInicial.toISOString().slice(0, 10);
    }
  }, []);

  return (
    <div>
      <S.StyledDisplayWrapper>
        <div>
          <p>Consumo Atual</p>
          <strong>
            <p>{`${consumoAtual} kWh`}</p>
          </strong>
          <p>
            Periodo <strong>{Dias} Dias</strong>
          </p>
        </div>

        <div className="values">
          <p>Valor:</p>
          <strong>
            {" "}
            <p>{`R$${novoValorTotal.toFixed(2)}`}</p>
          </strong>
        </div>
      </S.StyledDisplayWrapper>

      <S.StyledInputs>
        <div>
          <label htmlFor="leituraInicial">Valor Inicial (kW):</label>
          <input
            type="number"
            id="leituraInicial"
            ref={leituraInicialRef}
            placeholder="Numeração Inicial do relógio"
            title="Valor Inicial (kW)"
            defaultValue={valorInicial?.toString()}
          />
          <label htmlFor="leituraFinal">Valor Atual (kW):</label>
          <input
            type="number"
            id="leituraFinal"
            ref={leituraFinalRef}
            placeholder="Numeração Atual do relógio"
            title="Valor Inicial (kW)"
          />
        </div>

        <div>
          <label htmlFor="dataInicial">Data Inicial:</label>
          <input
            type="date"
            id="dataInicial"
            ref={dataInicialRef}
            placeholder=""
            title=""
          />
          <label htmlFor="dataFinal">Data Final:</label>
          <input
            type="date"
            id="dataFinal"
            ref={dataFinalRef}
            placeholder=""
            title=""
          />
        </div>
      </S.StyledInputs>
      <S.StyledButtonInpt onClick={handleButtonClick}>
        <button>Energize</button>
      </S.StyledButtonInpt>
    </div>
  );
};

export default Inputs;
