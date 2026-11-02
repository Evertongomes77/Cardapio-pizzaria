import { menuData } from "../menu/menu";
import { useState } from "react";
import { Container, DivCarrinho, DivLinks, DivPrice, DivProdutos, Frase, FraseCardapio } from "./styled";


function Cardapio() {
    const [filtro, setfiltro] = useState('tradicionais');
    const categoriaAtiva = menuData.find((categoria) => categoria.id === filtro);
    const [tamanhoSelecionado, settamanhoSelecionado]= useState(null);

    return (
        <Container>
            <Frase>Escolha seu sabor</Frase>
            <FraseCardapio>Nosso cardápio</FraseCardapio>
            <DivLinks>
                {menuData.map((categoria) => (
                    <div key={categoria.id}>
                        <button onClick={() => setfiltro(categoria.id)}>{categoria.category}</button>
                    </div>
                ))}
            </DivLinks>

            <DivProdutos>
                {categoriaAtiva?.products.map(produto => (
                    <div key={produto.id}>
                        <img src={produto.image} alt={produto.name} />
                        <h2>{produto.name}</h2>
                        <p>{produto.description}</p>
                        <DivCarrinho>
                            <p>Tamanhos:</p>
                            {produto.sizes ? (
                                produto.sizes.map((tamanho) => (
                                    <div key={tamanho.name} onClick={()=> settamanhoSelecionado({id:produto.id, tamanho:tamanho.name,price:tamanho.price})} className={`opcao-tamanho ${tamanhoSelecionado?.id === produto.id && tamanhoSelecionado?.tamanho === tamanho.name ? 'active' : ''}`}>
                                        <p>{tamanho.name}</p>
                                        <span>
                                            {tamanho.price.toLocaleString("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            })}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div
                                    onClick={() =>
                                        settamanhoSelecionado({
                                            id: produto.id,
                                            tamanho: "Unidade",
                                            price: produto.price,
                                        })
                                    }
                                    className={`opcao-tamanho ${tamanhoSelecionado?.id === produto.id ? "active" : ""}`}
                                >
                                    <p>Unidade</p>
                                    <span>
                                        {produto.price.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })}
                                    </span>
                                </div>
                            )}
                            <DivPrice>
                                <span>
                                    {tamanhoSelecionado?.id === produto.id
                                        ? tamanhoSelecionado.price.toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })
                                        : "Selecione um tamanho"}
                                </span>
                                <button>Adicionar ao carrinho</button>
                            </DivPrice>
                        </DivCarrinho>
                    </div>
                ))}
            </DivProdutos>

        </Container>
    )
}

export default Cardapio;