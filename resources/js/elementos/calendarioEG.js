import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const Trash = styled(FontAwesomeIcon)`
    font-size: 15px;
    color:red;
`;

const TD = styled.td`
    max-width: 200px;
`;

export {PanelInputs, TD, Trash}