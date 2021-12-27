import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colorSecundary, colorPrimary } from "../parametros/colores";


const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
`;

const IconNav = styled(FontAwesomeIcon)`
    font-size: 50px;
`

const Number = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -20px;
    margin-left: 22px;
    position: absolute;
    font-size: 13px;
    font-weight: bold;
    border-radius: 50%;
    border-style: solid;
    border-color: black;
    background-color: red;
    color:white;
    width: 25px;
    height: 25px;
`;

const BotonNav = styled.button`
    display: flex;
    gap: 5px;
    padding: 10px;
`;

const ContenedorNavC = styled.div`
    width: 600%;
    @media(max-width:991px){
        width: 100%;
    }
`;

const Link = styled.a`
    display: flex;
    gap: 10px;
    text-decoration: none;
    color: black;
    justify-content: start;
    align-items: center;
`;

const IconTrash = styled(FontAwesomeIcon)`
    font-size: 15px;
    color:white;
`;

const GrupoElement = styled.div`
    display: flex;
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

const ContTrash = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10px;
    align-items: center;
    :hover{
        background-color: rgb(${colorSecundary.r}, ${colorSecundary.g}, ${colorSecundary.b});
        img {
            color : rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
            
    }
`;

const ButtonTrash = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: red;
    border-color: red;
`;

export {Icon, Number, BotonNav, ContenedorNavC,IconNav, Link,
        IconTrash, GrupoElement, ContTrash, ButtonTrash}