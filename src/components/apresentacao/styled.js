import styled from "styled-components";


export const ImagemPizza= styled.img`
width: 300px;
height: 250px;
`

export const Container= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 40px;

height: 500px;
width: 100%;
background-color:rgb(234, 217, 217);
`


export const Secao1= styled.div`
display: flex;
flex-direction: column;
flex: 1;

h2{
    font-size: 30px;
    font-weight: 800;
    color:rgb(33, 26, 26);
    span{
        color:rgb(174, 31, 9);
    }
}
`

export const Frase= styled.p`
color:rgb(174, 31, 9);
font-size: 16px;
font-weight: 400;
`

export const FraseIngredientes= styled.div`
font-size: 16px;
color:rgb(85, 69, 69);

`

export const InformacaoesEntrega= styled.div`
margin-top: 20px;
display: flex;
gap: 2rem;
p{
    color:rgb(85, 69, 69);
    font-size: 16px;
    font-weight: 600;
}
div{
    display: flex;
    gap: 10px;
}
`