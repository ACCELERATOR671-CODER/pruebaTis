import styled from "styled-components"

const ContenedorInputs = styled.div`
    gap: 20px;
    display: grid;
`;

const ContenedorElementos = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    @media (max-width: 992px){
        grid-template-columns: 1fr;
    }
`;
const ContenedorPrincipal = styled.div`
    display: grid;
    gap: 20px;
`;

const ContenedorBoton = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    @media (max-width: 992px){
        grid-template-columns: 1fr;
    }

`;
export {ContenedorInputs, ContenedorElementos, ContenedorPrincipal, ContenedorBoton};

