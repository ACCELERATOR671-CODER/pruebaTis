import styled from "styled-components";

const Cuadro = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media(max-width:600px){
        grid-template-columns:1fr;
    }
`;

const Grid = styled.form`
    display:grid;
    gap : 20px;
`;

export {Cuadro, Grid};