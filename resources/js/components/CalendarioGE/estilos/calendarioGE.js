import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { colorSecundary } from '../../../parametros/colores';


const ContCalendar = styled.div`
    display: grid;
    grid-template-rows: auto 0.2fr auto;
    width: 100%;
    height: 100%;
`;

const ContCampos = styled.div`
    display: grid;
    grid-template-rows: 1fr auto 0.3fr;
`;

const ContIconos = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
`;

const ContBtmIzquierdo = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-right: 10px;
    cursor: pointer;
`;

const ContBtmDerecho = styled.div`
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-left: 10px;
    cursor: pointer;
`;

const ContInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
`;

const ContLabelInput = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: .3s ease all;
`;

const IconPlus = styled(FontAwesomeIcon)`
    font-size: 40px;
    color: rgb(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b});
    cursor: pointer;
`;

export {
    ContCalendar,
    ContCampos,
    ContIconos,
    ContBtmDerecho,
    ContBtmIzquierdo,
    ContInputs,
    ContLabelInput,
    IconPlus
};