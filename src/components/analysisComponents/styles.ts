import styled, { css } from "styled-components";

export const StyledPanel = styled.div`
  padding: 10px;
  margin: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  p {
    color: #5e5e5f;
    font-size: 20px;
  }

  i {
    img {
      width: 35px;
      height: 100%;
    }
  }
`;

export const StyledAnalisyPanel = styled.div`


  padding: 10px;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

`;

export const StyledAnalisyPanelItem = styled.div`

  width: 45%;
  margin: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;


  header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
   // background: #06A37C;

    p{
      font-weight: bold;
      color: whitesmoke;
      font-size: 16px;

    }
  }

  article{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 60%;
    //background: #DED9D9;

    p{
      font-size: 12px;
      font-weight: bold;
    }

    img{
      width: 40px;
    }
    
  }

  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
//  background-color: #06A37C;

    p{
      font-weight: bold;
      color: whitesmoke;
      font-size: 16px;

    }

  }
  

`
