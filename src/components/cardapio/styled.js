import styled from "styled-components";


export const Container= styled.div`
min-height: 0;
display: flex;
flex-direction: column;
width: 100%;
padding: 12px clamp(24px, 8vw, 120px) 40px;
background-color: #f8f5ef;
`


export const DivProdutos= styled.div`
display: flex;
margin-top: 18px;
gap: 16px;
overflow-x: auto;
padding-bottom: 4px;
> div {
    display: flex;
    flex: 0 0 calc((100% - 32px) / 3);
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #e7ddd0;
    border-radius: 12px;
    background-color: #fffdfa;
}
img{
    width: 100%;
    height: 158px;
    object-fit: cover;
}
h2{
    margin: 12px 13px 3px;
    color: #292521;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 16px;
    font-weight: 600;
}
> div > p{
    min-height: 30px;
    margin: 0 13px;
    color: #827d76;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.4;
}
`

export const DivLinks= styled.div`
display: flex;
gap: 22px;
padding: 14px 0 10px;
button{
    background-color: transparent;
    cursor: pointer;
    border: none;
    font-size: 11px;
    font-weight: 600;
    color: #918b83;
}
`

export const Frase= styled.div`
color: #f0522a;
font-size: 9px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
`

export const FraseCardapio= styled.h2`
color: #292521;
margin-top: 6px;
font-family: Georgia, "Times New Roman", serif;
font-size: 26px;
font-weight: 800;
`

export const DivCarrinho= styled.div`
display: flex;
flex-wrap: wrap;
align-items: flex-end;
margin: auto 13px 12px;
gap: 6px;
> p {
    width: auto;
    margin: 0 2px 6px 0;
    color: #827d76;
    font-size: 8px;
    font-weight: 500;
}
.opcao-tamanho{
    display: flex;
    width: 42px;
    min-height: 30px;
    padding: 3px 4px;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fffdfa;
    border: 1px solid #e7ddd0;
    border-radius: 6px;
    cursor: pointer;
    &.active{
        background-color: #d83d2b;
        color: #ffffff;
    }
    p{
        margin: 0;
        width: 100%;
        text-align: center;
        color: #827d76;
        font-size: 8px;
        font-weight: 600;
        line-height: 1.2;
        &.active{
            color: #ffffff;
        }
    }
    span{
        display: block;
        width: 100%;
        text-align: center;
        color: #827d76;
        font-size: 7px;
        font-weight: 700;
        line-height: 1.2;
    }
}
`


export const DivPrice= styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
width: 100%;
gap: 8px;

button{
    cursor: pointer;
    width: 84px;
    border-radius: 5px;
    height: 30px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: #f0522a;
    border-color: #f0522a;
    color: #ffffff;
    font-size: 9px;
}
span{
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
}
`