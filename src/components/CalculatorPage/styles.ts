import styled from "styled-components";
import bg from "../../assets/bg.svg";

export const StyledInputs = styled.div`
  padding: 10px;
  width: 90vw;
  bottom: 50px;
  border-radius: 20px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  background-color: #fff;

  > div {
    flex-basis: 48%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  label {
    font-size: 18px;
    margin-bottom: 3px;
    margin-top: 5px;
    font-weight: 500;
  }
  input {
    width: 90%;
    margin-bottom: 40px;
    font-size: 16px;
    padding: 16px;
    border: none;
    border-bottom: 1px solid #000000;
    background-color: transparent;
  }
`;

export const StyledButtonInpt = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  button {
    border-radius: 5px;
    padding: 20px;
    width: 50%;
    font-size: 18px;
    font-weight: bold;
    background-color: #299d80;
    color: #fff;
  }
`;

export const StyledDisplayWrapper = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;

  border-radius: 20px;
  margin: 20px;
  padding: 30px 0;
  height: 200px;
  margin-bottom: 20%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  p {
    font-size: 18px;
    line-height: 2;
  }

  .values {
    width: 125px;
    height: max-content;
    display: flex;
    justify-content: space-around;
  }
`;
