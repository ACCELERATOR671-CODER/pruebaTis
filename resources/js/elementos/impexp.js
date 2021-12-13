import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPrimary } from "../parametros/colores";

const Cuadro = styled.div`
    border-style: solid;
    border-color: black;
    padding:10px;
    display:flex;
    background-color: #ffcc00;
`;

const Icon = styled(FontAwesomeIcon)`
     font-size:50px;
`;

const ContenedorImportar = styled.div`
    text-align:left;
    padding-top: 10px;
    display: grid;
    gap:10px;
`;

const CuadroInputs = styled.form`
    border-style: solid;
    border-color: black;
    background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
    padding:10px;
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    justify-content: space-between;
`;

const IconoSubir = styled(FontAwesomeIcon)`
    font-size:30px;
`;

const IconoCargar = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: blue;
`;

const IconoFallo = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: red;
`;

const IconoSucc = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #33ff33;
`;

const Gap = styled.div`
    display: flex;
    gap:10px;
`;

export {Cuadro,  
        Icon,
        ContenedorImportar,
        CuadroInputs,
        IconoSubir,
        IconoCargar,
        IconoFallo,
        IconoSucc,
        Gap};