import styled from "styled-components";

const PanelInputs= styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media(max-width:916px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:476px){
        grid-template-columns: 1fr;
    }
`;

export {PanelInputs}