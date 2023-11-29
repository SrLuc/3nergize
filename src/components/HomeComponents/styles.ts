import styled from "styled-components";

//home componentes

export const StyledSearch = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 12px;
  margin: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    p {
      font-weight: 400;
      font-size: 24px;
      color: #5e5e5f;
    }
  }

  span {
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    color: #06a37c;
  }
`;

export const Styledbutton = styled.button``;

export const StyledApresentation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  top: 10vh;
  padding: 25px;

  h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: -0.333333px;
    color: #06a37c;
  }

  h3 {
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #5e5e5f;
  }

  h5 {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.333333px;
    color: #06a37c;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.333333px;
    color: #7c7575;
  }
`;

export const StyledBottomSearch = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  padding: 10px;
  margin: 100px;

  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #5e5e5f;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  cursor: pointer;

  h6 {
    color: #5e5e5f;
  }
`;

export const StyledBarChat = styled.div`
  .bar-chart-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    height: 185px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .bar-container {
    position: absolute;
    overflow: hidden;
  }

  .divBar {
    position: relative;
    top: 40px;
    right: 105px;
    background-color: pink;
  }

  img {
    width: 50px;
    height: 90px;
    align-self: baseline;
    position: relative;
    top: 12px;
  }

  label {
    font-weight: 400;
  }

  h1 {
    margin-top: 15px;
    font-weight: 300;
    align-self: baseline;
    margin-left: 15px;
  }

  .value-container {
    color: black;
    padding: 5px;
    border-radius: 10px;
    display: flex;
    gap: 40px;
    font-weight: 300;
    margin-left: 70px;
    align-items: center;
    padding-bottom: 20px;
  }

  button {
    color: #009500;
    width: 100px;
    height: 26px;
    background: #ffffff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .bar {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(6, 163, 124, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .backgroundpop {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 30vh;
    width: 300px;
  }

  .backgroundpop h2 {
    margin-bottom: 10px;
  }

  .backgroundpop input[type="number"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
  }

  .backgroundpop button {
    margin-right: 10px;
    padding: 8px 16px;
    background-color: rgb(6, 163, 124);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .backgroundpop button:last-child {
    background-color: #dc3545;
  }

  .backgroundpop button:hover {
    opacity: 0.8;
  }

  .message {
    position: relative;
    top: 47px;
    color: black;
    right: -15px;
  }
`;
