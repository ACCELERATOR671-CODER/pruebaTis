import styled, { css } from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores";

const Titulo = styled.p`
    color: black;
    text-aling: center;
    font-size: 12px;

`
const Subtitulo = styled.p`
    color: black;
    text-aling: center;
    font-size: 12px;
`
const NombreConsultora = styled.p`
    
    display: inline;
`
const NombreAsesores = styled.p`
    
    display: inline;
`
const NombreLider = styled.p`
    
    display: inline;
`
const PieDePagina = styled.p`
    color: black;
    text-aling: center;
    font-size: 12px;
`
;
const FirmaGE = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: end;

`
const SubirFirmaAsesor = styled.input`

`
;
const Letra = styled.p`
    font-size: 10px;

`

;
const FondoContrato  = styled.div`
    
    max-heigth: 700px;
    width: 700px;
    margin-top: 5%;
    text-align: center;
    transition: .5s ease all;
    background-color: white;
    border-color: black;
    border-radius: 30px;
    box-shadow: 10px 10px 10px;
    @media (max-width:700px){
        min-width: 0;
        width: 100%;
        margin: auto;
    }
`;

export{
    Titulo, Subtitulo, Letra, NombreConsultora, NombreAsesores, NombreLider, PieDePagina, SubirFirmaAsesor, FirmaGE, FondoContrato
};