import styled from "styled-components";
import {LuArrowLeftRight} from "react-icons/lu";

export const CalculadoraContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const CotizacionActual = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 5px;
  align-items: center;
  color: #f1f1f1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 80px;
  font-size: 1.2em;
  border-radius: 5px;
  background-color: white;
  color: black;

  & input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.2em;
    text-align: center;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
  }
`;

export const ExchangeIcon = styled(LuArrowLeftRight)`
  cursor: pointer;
`;
