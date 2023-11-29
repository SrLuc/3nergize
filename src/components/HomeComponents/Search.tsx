import React, {useState, useEffect} from "react";
import * as S from "./styles";

interface SearchProps {
  amount:string | number;
}

const Search = ({amount}: SearchProps) => {

  const [myValue, setMyValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('valorTotal');
    if (storedValue) {
      setMyValue(storedValue);
    }
  }, []);

  let valor = parseInt(myValue || '0');

  return (
    <S.StyledSearch>
      <span>
        <p>Gasto Atual</p>
      </span>
      <span>
        R${valor.toFixed(2)}
      </span>
    </S.StyledSearch>
  );
};

export default Search;
