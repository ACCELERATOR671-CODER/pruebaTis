import styled from "styled-components";
import { colorSecundary } from "../../../parametros/colores";

const ContenedorInvi = styled.div`
    padding: 10px;
    margin: 20px;
    max-height: 500px;
    height: 84%;
    overflow-y: auto;
`;

const CajaInvitacion = styled.div`
    background-color: rgba(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b}, 0.2);
    width: 100%;
    margin: 0 auto 20px;
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr;
    border: 2px solid black;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
`;

const CajaTexto = styled.div`
    min-width: 178px;
    width: 100%;
    height: 100%;
    overflow-wrap: break-word;
`;

const ImagenLogo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgb(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b})
`;

const CajaImagen = styled.div`
    width: 80px;
    height: 80px;
    margin: auto 5px;
`;

const CajaBotones = styled.div`
    width: 100%;
    height: 100%;
    padding: 14px;
    margin: auto;
`;

export {
    ContenedorInvi,
    CajaInvitacion,
    CajaTexto,
    ImagenLogo,
    CajaImagen,
    CajaBotones
};