import styled from "styled-components";
import { Circle } from 'lucide-react';


export const Circulo = styled(Circle)`
color: ${props => props.status === 'aberto' ? '#196628' : '#ff0000'};
width: 10px;
`


export const Container = styled.div`
display: flex;
align-items: center;
gap: 10px;
position:absolute;
right: 10px;
span{
    font-size: 10px;
    color: #877d7d;
}
`

export const Status = styled.p`
 font-size: 10px;
    font-weight: 500;
    color: ${props => props.status === 'aberto' ? '#196628' : '#ff0000'};
`