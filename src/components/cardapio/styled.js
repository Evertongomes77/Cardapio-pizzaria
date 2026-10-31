import styled from "styled-components";


export const Container= styled.div`
height: 500px;
display: flex;
flex-direction: column;
width: 100%;
background-color:rgb(46, 43, 43);
padding: 20px;
`


export const DivProdutos= styled.div`
display: flex;
margin-top: 20px;
gap:2rem;
img{
    width: 300px;
    height: 250px;
    border-radius: 30px;
}
h2{
    margin-left: 20px;
    color:rgb(216, 156, 17);
    font-size: 20px;
    font-weight: 600;
}
p{
    margin-left: 20px;
    color:rgb(240, 231, 231);
    font-size: 16px;
    font-weight: 400;
}
`

export const DivLinks= styled.div`
display: flex;
gap: 2rem;
button{
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: rgb(173, 169, 169);;
}
`

export const Frase= styled.div`
color:rgb(174, 31, 9);
font-size: 18px;
font-weight: 400;
`

export const FraseCardapio= styled.h2`
color:rgb(0, 0, 0);
font-size: 30px;
font-weight: 800;
`