import styled from "styled-components";


export const ImagemPizza= styled.img`
width: 220px;
height: 220px;
border-radius: 50%;
object-fit: cover;
`

export const Container= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 48px;
padding: 34px clamp(24px, 8vw, 120px) 20px;
height: 280px;
width: 100%;
background-color: #f8f5ef;
`


export const Secao1= styled.div`
display: flex;
flex-direction: column;
flex: 1 1 55%;

h2{
    margin: 8px 0 10px;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 36px;
    font-weight: 800;
    line-height: 1.02;
    color: #292521;
    span{
        color: #f0522a;
    }
}
`

export const Frase= styled.p`
color: #f0522a;
font-size: 9px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
`

export const FraseIngredientes= styled.div`
font-size: 12px;
line-height: 1.5;
color: #827d76;

`

export const InformacaoesEntrega= styled.div`
margin-top: 18px;
display: flex;
gap: 16px;
p{
    color: #827d76;
    font-size: 10px;
    font-weight: 600;
}
div{
    display: flex;
    align-items: center;
    gap: 6px;
}
svg{
    width: 13px;
    height: 13px;
}
`