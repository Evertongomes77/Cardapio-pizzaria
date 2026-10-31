import { menuData } from "../menu/menu";
import { useState } from "react";
import { Container, DivLinks, DivProdutos, Frase, FraseCardapio } from "./styled";


function Cardapio() {
    const [filtro, setfiltro] = useState('tradicionais');
    const categoriaAtiva= menuData.find((categoria)=>categoria.id===filtro);

    return (
        <Container>
            <Frase>Escolha seu sabor</Frase>
            <FraseCardapio>Nosso cardápio</FraseCardapio>
            <DivLinks>
                {menuData.map((categoria) => (
                    <div>
                        <button onClick={()=>setfiltro(categoria.id)}>{categoria.category}</button>
                    </div>
                ))}
            </DivLinks>

            <DivProdutos>
            {categoriaAtiva?.products.map(produto => (
                    <div key={produto.id}>
                        <img src={produto.image} alt="" />
                        <h2>{produto.name}</h2>
                        <p>{produto.description}</p>
                    </div>
                
            ))}
            </DivProdutos>

        </Container>
    )
}

export default Cardapio;