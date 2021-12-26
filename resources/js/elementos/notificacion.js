import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
    font-size: 40px;
`;

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

export {Icon, Number}