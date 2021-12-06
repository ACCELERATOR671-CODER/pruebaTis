import styled from "styled-components";
import { colorSecundary, colorPrimary } from "../parametros/colores";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav =  styled.nav`
    width: 100%;
    padding: 0;
    position: fixed;
    display:flex;
    min-width: 403px;
    min-height: 60px;
    max-height: 60px;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    z-index: 100;

    @media (max-width: 991px){
        max-height: 800px;
        position: relative;
    }
`;

const Img = styled.img`
    width: 150px;
    height: 25px;
    object-fit: cover;
`;

const ItemNav = styled.div`
    border-radius: 5px;
    text-decoration: none;
    transition: .3s ease all;

    a{
        color : rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    }

    &:hover{
        background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        a {
            color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }
`;

const ItemNavI = styled.div`
    border-radius: 5px;
    text-decoration: none;
    transition: .3s ease all;
    background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    a {
        color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;

const Log = styled.div`
    margin-left: 20px;
    margin-right: 20px;
`;

const IconNav = styled(FontAwesomeIcon)`    
    font-size: 50px;
    color: black;
`;

const IconNavI = styled(FontAwesomeIcon)`    
    font-size: 40px;
    color: black;
    display: none;

    @media (max-width: 992px){
        display: block;
        margin-left: 10px;
    }
`;

const GrupoElement = styled.div`
    color: black;
    justify-content: center;

    a label {
        color :black;
        margin-bottom: -20px;
    }

    @media (max-width: 991px){
        margin-left: 20px;
    }

    :hover {
        background-color: rgb(${colorSecundary.r}, ${colorSecundary.g}, ${colorSecundary.b});
        a {
            color : rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }
`;

const LabelNav = styled.label`
    margin-left: 20px;
`;

const ContenedorNavC = styled.div`
    width: 165%;
    @media(max-width:991px){
        width: 100%;
    }
`;
export {
        Nav,
        ItemNav,
        Img,
        ItemNavI,
        Log,
        IconNav,
        GrupoElement,
        LabelNav,
        IconNavI,
        ContenedorNavC    };