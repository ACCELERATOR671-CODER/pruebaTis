import styled from "styled-components";
import { colorPrimary } from "../parametros/colores";
import Chevron from '../../js/components/Acordeon/chevron.svg'

const Acordeon =  styled.div`
    max-width: 400px;
    margin: 100px auto 0;
    border-radius: 3px;
    background: #f1f1f1;
`;
const CommandGroupHeader = styled.div`
  border: 1px solid blue;
  border-radius: 1rem;
  padding: 0.9rem;
  margin-bottom: 0.5em;
  display: flex;

  img {
    width: 2rem;
    margin: 0 1em;
  }
  h3 {
    margin: auto 0;
    color: gray;
    font-weight: 600;
  }
  button {
    margin: auto 0 auto auto;
    padding: 1em;
    background: none;
    color: blue;
    text-transform: capitalize;
    border: none;
    outline: none;
    font-size: 1rem;
  }
`;
const CommandGroupList = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 1rem;
  transition: 0.9s;
  div {
    display: flex;
    align-items: center;
    padding: 0.5em 1em;

    h4 {
      border: 1px solid cyan;
      border-radius: 0.5em;
      padding: 0.4em 0.5em;
      background: lightcyan;
      color: gray;
      margin: 0 5px;
    }
    p {
      color: gray;
      margin: 1rem 5px;
    }
  }
`;
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 2rem;
  }
`;


export{Acordeon, CommandGroupHeader, CommandGroupList,AccordionSection,Container,Wrap,Dropdown};