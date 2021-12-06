import styled from "styled-components";
import { colorPrimary } from "../parametros/colores";

const Card = styled.div`
    max-width: 700px;
    min-width: 700px;
    margin-top: 5%;
    text-align: center;
    transition: .5s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.7);
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-radius: 30px;
    box-shadow: 10px 10px 10px;
    @media (max-width:700px){
        min-width: 0;
        width: 100%;
        margin: auto;
    }
`;

const Fondo = styled.img`
    display: block;
    opacity: 0.3;
    position: fixed;
    z-index: -100;
    height: 100%;
    object-fit: cover;
`;

export {Card, Fondo};